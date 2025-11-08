import * as React from "react"
const LikedIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={32}
        x2={32}
        y1={8.053}
        y2={58.949}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ef5451" />
        <stop offset={1} stopColor="#d32e2e" />
      </linearGradient>
    </defs>
    <path
      d="M32 12.7a15.877 15.877 0 0 0-22.983.556c-5.754 6.323-5.2 16.17.847 22.215l19.3 19.3a4.015 4.015 0 0 0 5.678 0l19.3-19.3c6.045-6.045 6.6-15.892.847-22.215A15.877 15.877 0 0 0 32 12.7Z"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
)
export default LikedIcon
