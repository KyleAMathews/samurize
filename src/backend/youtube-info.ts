import { YoutubeTranscript } from "youtube-transcript"
const youtube = require(`youtube-metadata-from-url`)

export async function getTranscriptAndMetadata(id: string) {
  const transcript = await YoutubeTranscript.fetchTranscript(id)
  const metadata = await youtube.metadata(
    `https://www.youtube.com/watch?v=${id}`
  )

  return {
    ...metadata,
    transcript,
  }
}
