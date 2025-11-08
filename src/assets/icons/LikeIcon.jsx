import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" {...props}>
    <path
      d="M9.5 5C5.362 5 2 8.404 2 12.5c0 1.428.65 2.667 1.25 3.563.6.895 1.219 1.468 1.219 1.468L15.28 28.375l.719.719.719-.719L27.53 17.531S30 15.357 30 12.5C30 8.404 26.638 5 22.5 5c-3.433 0-5.645 2.066-6.5 2.938C15.145 7.066 12.933 5 9.5 5zm0 2c2.986 0 5.75 2.906 5.75 2.906l.75.844.75-.844S19.514 7 22.5 7c3.042 0 5.5 2.496 5.5 5.5 0 1.545-1.875 3.625-1.875 3.625L16 26.25 5.875 16.125s-.485-.466-.969-1.188C4.423 14.217 4 13.273 4 12.5 4 9.496 6.458 7 9.5 7z"
      color="none"
      fontFamily="Bitstream Vera Sans"
      overflow="visible"
      style={{
        textIndent: 0,
        textAlign: "start",
        lineHeight: "normal",
        textTransform: "none",
        blockProgression: "tb",
        InkscapeFontSpecification: "Bitstream Vera Sans",
      }}
    />
  </svg>
)
export default SvgComponent
