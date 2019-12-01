import {css} from '@transclusion/css'
import React from 'react'
import {ThemeProvider} from '../'
import {defaultTheme} from './themes'

const BASE_CSS = `
html {
  font-size: 100%;
  line-height: 1.5;
}

body {
  margin: 0;
}

html,
body,
body > div {
  height: 100%;
}
`

export default props => {
  const theme = props.theme || defaultTheme

  if (!theme) return null

  return (
    <ThemeProvider theme={theme}>
      <>
        <style>{BASE_CSS}</style>
        <style>{css(theme)}</style>
        <div className="sn-root">
          {props.children}
          <div id="portalModals"></div>
        </div>
      </>
    </ThemeProvider>
  )
}
