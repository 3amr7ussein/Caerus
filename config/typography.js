import Typography from "typography"
import { createGlobalStyle } from "styled-components"
import SFFonts from "./ttffonts"

export const typography = new Typography({
  title: "FrondTypeFace",
  baseFontSize: "19px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Helvetica", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Helvetica", "Helvetica", "Arial", "sans-serif"],
  headerWeight: 700,
  bodyWeight: 400,
  scaleRatio: 1,
})

export default typography
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const rhythm = typography.rhythm
export const scale = typography.scale

export const FontContainer = createGlobalStyle`

@font-face {
    font-family: 'Helvetica2';
    font-weight: 400
    src:url(${SFFonts.HNCondensed}) format("truetype"), url(${
  SFFonts.HNCondensedOTF
}) format("woff");
}


`
