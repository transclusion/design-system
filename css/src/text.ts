import {css} from './_util'
import {Theme, ThemeTextSize} from './types'

export interface TextProps {
  size: 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'
}

export const textBaseCss = () => css`
  .sn-txt {
    display: block;
  }

  .sn-txt:before {
    content: '';
    display: block;
    height: 0;
  }
`

export function textThemeCss(theme: Theme) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const textKeys = Object.keys(theme.text)
  const firstBreakpointKey = breakpointKeys[0]

  let str = ''

  str += `\n.sn-txt {\n  margin-left: -0.08em;\n}\n`

  for (const breakpointKey of breakpointKeys) {
    const breakpointPrefix = breakpointKey !== firstBreakpointKey ? `${breakpointKey}\\:` : ''

    if (breakpointKey !== firstBreakpointKey) {
      str += `\n@media (min-width: ${(theme.breakpoint as any)[breakpointKey]}) {\n`
    }

    for (const textKey of textKeys) {
      const t: ThemeTextSize = (theme.text as any)[textKey]
      str += [
        `\n.${breakpointPrefix}sn-txt--s\\:${textKey} {\n`,
        `  font-size:${t.fontSize};\n`,
        `  line-height:${t.lineHeight};\n`,
        `  transform:translateY(${t.transformY});\n`,
        `}\n`,
        `.${breakpointPrefix}sn-txt--s\\:${textKey}:before {\n`,
        `  margin-top: ${t.marginTop};\n`,
        `}\n`
      ].join('')
    }

    if (breakpointKey !== firstBreakpointKey) {
      str += `\n}\n`
    }
  }

  return str
}

function toArray(val: any) {
  if (Array.isArray(val)) {
    return val
  }

  return [val]
}

export function textClassName(theme: Theme, props: TextProps) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const classNames = ['sn-txt']
  const size = toArray(props.size)
  const len = size.length

  for (let i = 0; i < len; i += 1) {
    const prefix = i === 0 ? '' : `${breakpointKeys[i]}:`

    if (size[i]) {
      classNames.push(`${prefix}sn-txt--s:${size[i]}`)
    }
  }

  return classNames.join(' ') || undefined
}
