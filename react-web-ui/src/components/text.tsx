import React from 'react'
import {useFgClass, useTextClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Box, BoxProps} from './box'

export interface TextProps extends BoxProps {
  fg?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
  size?: 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'
}

export function Text(props: TextProps & React.HTMLProps<HTMLButtonElement>) {
  const {fg, size, ...restProps} = props
  const className = classNames(props.className, useFgClass({fg}), useTextClass({size: size || 3}))

  return (
    <Box {...restProps} className={className} data-c={getCompPath('text', props)}>
      {props.children}
    </Box>
  )
}
