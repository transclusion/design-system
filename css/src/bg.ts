import {css} from './_util'
import {Theme} from './types'

export interface BgProps {
  bg?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
}

const themeBgTemplate = ({key, theme}: {key: string; theme: Theme}) => css`
  .sn-bg\\:${key} {
    background: ${(theme.bg as any)[key]}
  }
`

export function bgBaseCss() {
  return ''
}

export function bgThemeCss(theme: Theme) {
  const keys = Object.keys(theme.bg)

  let str = ''

  for (const key of keys) {
    str += themeBgTemplate({key, theme})
  }

  return str
}

export function bgClassName(_: Theme, props: BgProps) {
  if (props.bg) {
    return `sn-bg:${props.bg}`
  }

  return null
}
