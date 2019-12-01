import {css} from './_util'
import {Theme, ThemeTextSize} from './types'

export interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | '1' | '2' | '3' | '4' | '5' | '6' | '7'
}

const headingBaseTemplate = () => css`
  .sn-hdng {
    margin: 0;
  }

  .sn-hdng:before {
    content: '';
    display: block;
    height: 0;
  }
`

const headingThemeTemplate = () => css`
  .sn-root .sn-hdng {
    font-weight: 700;
    margin-left: -0.06em;
  }
`

const headingThemeSizeTemplate = ({
  breakpointPrefix,
  headingKey,
  t
}: {
  breakpointPrefix: string
  headingKey: string
  t: ThemeTextSize
}) => css`
  .sn-root .${breakpointPrefix}sn-hdng--s\\:${headingKey} {
    font-size: ${t.fontSize};
    line-height: ${t.lineHeight};
    transform: translateY(${t.transformY})
  }

  .${breakpointPrefix}sn-hdng--s\\:${headingKey}:before {
    margin-top: ${t.marginTop}
  }
`

export function headingBaseCss() {
  return headingBaseTemplate()
}

export function headingThemeCss(theme: Theme) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const headingKeys = Object.keys(theme.heading)
  const firstBreakpointKey = breakpointKeys[0]

  let str = ''
  str += headingThemeTemplate()

  for (const breakpointKey of breakpointKeys) {
    const breakpointPrefix = breakpointKey !== firstBreakpointKey ? `${breakpointKey}\\:` : ''

    if (breakpointKey !== firstBreakpointKey) {
      str += `@media(min-width:${(theme.breakpoint as any)[breakpointKey]}){\n`
    }

    for (const headingKey of headingKeys) {
      const t: ThemeTextSize = (theme.heading as any)[headingKey]
      str += headingThemeSizeTemplate({breakpointPrefix, headingKey, t})
    }

    if (breakpointKey !== firstBreakpointKey) {
      str += `}\n`
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

export function headingClassName(theme: Theme, props: HeadingProps) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const classNames = ['sn-hdng']
  const size = toArray(props.size)
  const len = size.length

  for (let i = 0; i < len; i += 1) {
    const prefix = i === 0 ? '' : `${breakpointKeys[i]}:`

    if (size[i]) {
      classNames.push(`${prefix}sn-hdng--s:${size[i]}`)
    }
  }

  return classNames.join(' ') || undefined
}
