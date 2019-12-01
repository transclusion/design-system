import {css} from './_util'
import {Theme} from './types'

export const rootBaseCss = () => css`
  .sn-root {
    height: 100%;
    line-height: 0;
  }

  .sn-root input,
  .sn-root button {
    -webkit-appearance: none;
    font: inherit;
    background: none;
    color: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
  }

  .sn-root p {
    margin: 0;
  }

  .sn-root h1,
  .sn-root h2,
  .sn-root h3,
  .sn-root h4,
  .sn-root h5,
  .sn-root h6 {
    font: inherit;
    margin: 0;
  }
`

export const rootThemeCss = (_: Theme) => css`
  .sn-root {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }

  .sn-root input,
  .sn-root button {
    -webkit-font-smoothing: inherit;
  }
`
