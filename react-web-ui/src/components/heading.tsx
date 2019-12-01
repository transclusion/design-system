import React from 'react'
import {useFgClass, useHeadingClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Box} from './box'
import {ComponentProps} from './types'

export interface HeadingProps extends ComponentProps {
  fg?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'
}

export function Heading(props: HeadingProps & React.HTMLProps<HTMLHeadingElement>) {
  const {as: asProp, fg, level: levelProp, size, ...restProps} = props
  const level = levelProp || 1
  const className = classNames(
    props.className,
    useFgClass({fg}),
    useHeadingClass({size: size || 1})
  )

  const headingProps = {
    ...restProps,
    as: asProp || `h${level}`,
    className,
    'data-c': getCompPath('heading', props)
  }

  return <Box {...headingProps} />
}
