import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global, css } from '@emotion/core'

/* Import Hot Routes */
import Routes from '../hot-routes'
/* Import Other  */

const global = css`
  @font-face {
    font-family: "Manrope";
    src: url("../assets/fonts/manrope-extrabold.woff2") format("woff2");
    font-style: normal;
    font-weight: 800; }
  @font-face {
    font-family: "Manrope";
    src: url("../assets/fonts/manrope-bold.woff2") format("woff2");
    font-style: normal;
    font-weight: 700; }
  @font-face {
    font-family: "Manrope";
    src: url("../assets/fonts/manrope-medium.woff2") format("woff2");
    font-style: normal;
    font-weight: 500; }
  @font-face {
    font-family: "Manrope";
    src: url("../assets/fonts/manrope-regular.woff2") format("woff2");
    font-style: normal;
    font-weight: 400; }
  *,*:before,*:after {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Manrope", sans-serif;
    letter-spacing: auto;
    line-height: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;
    background-color: #f9f9fa;
    color: #fff;
  }
`

const App = () => (
  <>
    <Global styles={global} />
    <Router>
      <Routes />
    </Router>
  </>
)

export default App
