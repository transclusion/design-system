import React from 'react'
import {useInlineClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Box, BoxProps} from './box'

export interface InlineProps extends BoxProps {
  spacing?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'
}

function toArray(val: any): any[] {
  if (Array.isArray(val)) {
    return val
  }

  return [val]
}

export function Inline(props: InlineProps & React.HTMLProps<HTMLDivElement>) {
  const {children: childrenProp, className: classNameProp, spacing, ...restProps} = props
  const className = classNames(classNameProp, useInlineClass({spacing}))

  const inlineProps = {
    ...restProps,
    className,
    'data-c': getCompPath('Inline', props)
  }

  const children = toArray(childrenProp)
    .filter(Boolean)
    .map((child, idx) => <div key={String(idx)}>{React.cloneElement(child)}</div>)

  return <Box {...inlineProps}>{children}</Box>
}
