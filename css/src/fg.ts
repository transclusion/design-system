import {css} from './_util'
import {Theme} from './types'

export interface FgProps {
  fg?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
}

const fgTemplate = ({fgKey, theme}: {fgKey: string; theme: Theme}) => css`
  .sn-fg\\:${fgKey} {
    color: ${(theme.fg as any)[fgKey]}
  }
`

export function fgBaseCss() {
  return ''
}

export function fgThemeCss(theme: Theme) {
  const fgKeys = Object.keys(theme.fg)

  let str = ''

  for (const fgKey of fgKeys) {
    str += fgTemplate({fgKey, theme})
  }

  return str
}

export function fgClassName(_: Theme, props: FgProps) {
  if (props.fg) {
    return `sn-fg:${props.fg}`
  }

  return null
}
