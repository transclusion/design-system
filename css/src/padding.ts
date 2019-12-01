import {css} from './_util'
import {Theme} from './types'

type ResponsiveValue = string | string[]

export interface PaddingProps {
  padding?: ResponsiveValue
  paddingTop?: ResponsiveValue
  paddingRight?: ResponsiveValue
  paddingBottom?: ResponsiveValue
  paddingLeft?: ResponsiveValue
}

const propertyMatrix = [
  ['pt', 'padding-top'],
  ['pr', 'padding-right'],
  ['pb', 'padding-bottom'],
  ['pl', 'padding-left']
]

const paddingTemplate = ({
  breakpointPrefix,
  cssProperty,
  spaceKey,
  utilName,
  theme
}: {
  breakpointPrefix: string
  cssProperty: string
  spaceKey: string
  utilName: string
  theme: Theme
}) => css`
  .sn-root .${breakpointPrefix}sn-${utilName}\\:${spaceKey} {
    ${cssProperty}: ${(theme.space as any)[spaceKey]}
  }
`

export function paddingBaseCss() {
  return ''
}

export function paddingThemeCss(theme: Theme) {
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
      for (const [utilName, cssProperty] of propertyMatrix) {
        str += paddingTemplate({
          breakpointPrefix,
          cssProperty,
          spaceKey,
          utilName,
          theme
        })
      }
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

export function paddingClassName(theme: Theme, props: PaddingProps) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const classNames = []

  const padding = toArray(props.padding)
  const paddingTop = props.paddingTop ? toArray(props.paddingTop) : padding
  const paddingRight = props.paddingRight ? toArray(props.paddingRight) : padding
  const paddingBottom = props.paddingBottom ? toArray(props.paddingBottom) : padding
  const paddingLeft = props.paddingLeft ? toArray(props.paddingLeft) : padding

  const len = Math.max(
    paddingTop.length,
    paddingRight.length,
    paddingBottom.length,
    paddingLeft.length
  )

  for (let i = 0; i < len; i += 1) {
    const prefix = i === 0 ? '' : `${breakpointKeys[i]}:`

    if (paddingTop[i]) {
      classNames.push(`${prefix}sn-pt:${paddingTop[i]}`)
    }
    if (paddingRight[i]) {
      classNames.push(`${prefix}sn-pr:${paddingRight[i]}`)
    }
    if (paddingBottom[i]) {
      classNames.push(`${prefix}sn-pb:${paddingBottom[i]}`)
    }
    if (paddingLeft[i]) {
      classNames.push(`${prefix}sn-pl:${paddingLeft[i]}`)
    }
  }

  return classNames.join(' ') || undefined
}
