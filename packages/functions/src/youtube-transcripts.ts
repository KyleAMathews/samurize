import { parse } from "node-html-parser"
const USER_AGENT = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)`

export class YoutubeTranscriptError extends Error {
  constructor(message: string) {
    super(`[YoutubeTranscript] ${message}`)
  }
}

export class YoutubeTranscript {
  /**
   * Fetch transcript from YouTube Video
   * @param videoId Video url or video identifier
   * @param config Object with lang param (eg: en, es, hk, uk) format.
   * Will just grab the first caption if it can find one, so no special lang caption support.
   */
  static async fetchTranscript(
    videoId: string,
    config: { lang?: string } = {}
  ) {
    // const identifier = this.retrieveVideoId(videoId)
    const lang = config?.lang ?? `en`
    try {
      const transcriptUrl = await fetch(
        `https://www.youtube.com/watch?v=${videoId}`,
        {
          headers: {
            "User-Agent": USER_AGENT,
          },
        }
      )
        .then((res) => res.text())
        .then((html) => parse(html))
        .then((html) => this.parseTranscriptEndpoint(html, lang))

      if (!transcriptUrl)
        throw new Error(`Failed to locate a transcript for this video!`)

      const transcriptXML = await fetch(transcriptUrl)
        .then((res) => res.text())
        .then((xml) => parse(xml))

      const chunks = transcriptXML.getElementsByTagName(`text`)

      const transcriptions = []
      // use the following code snippet at the end of `fetchTranscript`
      for (const chunk of chunks) {
        const [offset, duration] = chunk.rawAttrs.split(` `)
        const convertToMs = (text: string) =>
          parseFloat(text.split(`=`)[1].replace(/"/g, ``)) * 1000
        transcriptions.push({
          text: chunk.text,
          offset: convertToMs(offset),
          duration: convertToMs(duration),
        })
      }

      return transcriptions
    } catch (e) {
      throw new YoutubeTranscriptError(e.message)
    }
  }

  private static parseTranscriptEndpoint(
    document: any,
    langCode: string | null = null
  ) {
    try {
      const scripts = document.getElementsByTagName(`script`)
      const playerScript = scripts.find((script: any) =>
        script.textContent.includes(`var ytInitialPlayerResponse = {`)
      )

      const dataString =
        playerScript.textContent
          ?.split(`var ytInitialPlayerResponse = `)?.[1]
          ?.split(`};`)?.[0] + `}`

      const data = JSON.parse(dataString.trim())
      const availableCaptions =
        data?.captions?.playerCaptionsTracklistRenderer?.captionTracks || []

      let captionTrack = availableCaptions?.[0]
      if (langCode) {
        captionTrack =
          availableCaptions.find((track: any) =>
            track.languageCode.includes(langCode)
          ) ?? availableCaptions?.[0]
      }

      return captionTrack?.baseUrl
    } catch (e) {
      console.error(`YoutubeTranscript.#parseTranscriptEndpoint ${e.message}`)
      return null
    }
  }

  /**
   * Retrieve video id from url or string
   * @param videoId video url or video id
   */
  static retrieveVideoId(videoId: string) {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/i
    const matchId = videoId.match(regex)
    if (matchId && matchId.length) {
      return matchId[1]
    }
    throw new YoutubeTranscriptError(`Impossible to retrieve Youtube video ID.`)
  }
}
