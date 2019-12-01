import {css} from './_util'
import {Theme} from './types'

type ResponsiveValue = string | string[]

export interface StackProps {
  spacing?: ResponsiveValue
}

const propertyMatrix = [['s', 'grid-gap']]

export const stackBaseCss = () => css`
  .sn-stack {
    display: grid;
    grid-auto-flow: row;
  }
`

export function stackThemeCss(theme: Theme) {
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
      for (const [mod, cssProperty] of propertyMatrix) {
        str += `.${breakpointPrefix}sn-stack--${mod}\\:${spaceKey}{${cssProperty}:${
          (theme.space as any)[spaceKey]
        }}\n`
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

export function stackClassName(theme: Theme, props: StackProps) {
  const breakpointKeys = Object.keys(theme.breakpoint)
  const classNames = ['sn-stack']
  const spacing = toArray(props.spacing)

  for (let i = 0; i < spacing.length; i += 1) {
    const prefix = i === 0 ? '' : `${breakpointKeys[i]}:`

    if (spacing[i]) {
      classNames.push(`${prefix}sn-stack--s:${spacing[i]}`)
    }
  }

  return classNames.join(' ')
}
