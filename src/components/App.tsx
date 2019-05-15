import React from 'react'
import {Global, css} from '@emotion/core'

/* Import Hot Routes */
import Routes from '../hot-routes'
/* Import Other  */

const global = css`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: url('../assets/fonts/Inter-Black.woff2') format('woff2'),
      url('../assets/fonts/Inter-Black.woff') format('woff');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url('../assets/fonts/Inter-Bold.woff2') format('woff2'),
      url('../assets/fonts/Inter-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/Inter-Regular.woff2') format('woff2'),
      url('../assets/fonts/Inter-Regular.woff') format('woff');
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    line-height: normal;
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;
    background-color: #f9f9fa;
    color: #000;
  }
  code {
    font-size: 1.2rem;
    color: #612dc9;
  }
`

const App = () => (
  <>
    <Global styles={global} />
    <Routes />
  </>
)

export default App
