import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'JetBrains Mono', monospace;
        font-style: Light;
        font-weight: 300;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap');
      },
      `}
  />
)

export default Fonts