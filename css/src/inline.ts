import {css} from './_util'
import {Theme} from './types'

type ResponsiveValue = string | string[]

export interface InlineProps {
  spacing?: ResponsiveValue
}

export const inlineBaseCss = () => css`
  .sn-inline > div {
    display: inline-block;
    vertical-align: top;
  }
`

export const inlineThemeSizeCss = ({
  breakpointPrefix,
  spaceKey,
  value
}: {
  breakpointPrefix: string
  spaceKey: string
  value: string
}) => css`
  .${breakpointPrefix}sn-inline--s\\:${spaceKey} {
    margin: -${value} 0 0 -${value};
  }

  .${breakpointPrefix}sn-inline--s\\:${spaceKey} > div {
    padding: ${value} 0 0 ${value};
  }
`

export function inlineThemeCss(theme: Theme) {
  const spaceKeys = Object.keys(theme.space)
  const breakpointKeys = Object.keys(theme.breakpoint)
  const firstBreakpointKey = breakpointKeys[0]

  let str = ''

  for (const breakpointKey of breakpointKeys) {
    const breakpointPrefix = breakpointKey !== firstBreakpointKey ? `${breakpointKey}\\:` : ''

    if (breakpointKey !== firstBreakpointKey) {
      str += `@media(min-width:${(theme.breakpoint as any)[breakpointKey]}){\n`
    }

    for (const spaceKey of spaceKeys) {
      str += inlineThemeSizeCss({
        breakpointPrefix,
        spaceKey,
        value: (theme.space as any)[spaceKey]
      })
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

export function inlineClassName(theme: Theme, props: InlineProps) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const spacing = toArray(props.spacing)

  let str = 'sn-inline'

  for (let i = 0; i < spacing.length; i += 1) {
    const prefix = i === 0 ? '' : `${breakpointKeys[i]}:`

    if (spacing[i]) {
      str += ` ${prefix}sn-inline--s:${spacing[i]}`
    }
  }

  return str
}
