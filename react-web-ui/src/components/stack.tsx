import React from 'react'
import {useStackClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Box, BoxProps} from './box'

export interface StackProps extends BoxProps {
  spacing?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'
}

export function Stack(props: StackProps & React.HTMLProps<HTMLDivElement>) {
  const {spacing, className: classNameProp, ...restProps} = props
  const className = classNames(classNameProp, useStackClass({spacing}))

  const stackProps = {
    ...restProps,
    className,
    'data-c': getCompPath('stack', props)
  }

  return <Box {...stackProps} />
}
