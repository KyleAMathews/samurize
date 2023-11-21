import { createStyleObject } from "@capsizecss/core"
import robotoMetrics from "@capsizecss/metrics/roboto"
import Typography from "typography"

const typographyObject = new Typography({
  baseFontSize: `18px`,
  // scaleRatio: 4,
})
const typography = typographyObject.toJSON()

console.log({ typography, typographyObject })

function toPx(elementStyles) {
  const fontSize = remToPx(elementStyles.fontSize)
  console.log({ fontSize, lineHeight: elementStyles.lineHeight })
  const lineHeight = Math.round(fontSize * elementStyles.lineHeight * 1e2) / 1e2
  console.log({ fontSize, lineHeight })
  return { fontSize, leading: lineHeight }
}
function remToPx(rem: number | string) {
  // Check if the input is a string and extract the numerical value
  if (typeof rem === `string`) {
    const match = rem.match(/(\d+(\.\d+)?)rem/)
    if (match && match[1]) {
      rem = parseFloat(match[1])
    } else {
      throw new Error(`Invalid REM value`)
    }
  }
  return rem * 18
}

export const title = createStyleObject({
  fontSize: 64,
  leading: 70,
  fontMetrics: robotoMetrics,
})

export const h1 = createStyleObject({
  ...toPx(typography.h1),
  fontMetrics: robotoMetrics,
})
export const h2 = createStyleObject({
  ...toPx(typography.h2),
  fontMetrics: robotoMetrics,
})

export const h3 = createStyleObject({
  ...toPx(typography.h3),
  fontMetrics: robotoMetrics,
})

export const h4 = createStyleObject({
  ...toPx(typography.h4),
  fontMetrics: robotoMetrics,
})

export const h5 = createStyleObject({
  ...toPx(typography.h5),
  fontMetrics: robotoMetrics,
})

export const h6 = createStyleObject({
  ...toPx(typography.h6),
  fontMetrics: robotoMetrics,
})

export const body1 = createStyleObject({
  fontSize: 18,
  leading: remToPx(typographyObject.options.baseLineHeight),
  fontMetrics: robotoMetrics,
})
