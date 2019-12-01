import React from 'react'
import {useBgClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Box, BoxProps} from './box'

export interface CardProps extends BoxProps {
  bg?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'
}

export function Card(props: CardProps & React.HTMLProps<HTMLDivElement>) {
  const {bg, className: classNameProp, ...restProps} = props
  const className = classNames(classNameProp, useBgClass({bg}))

  const cardProps = {
    ...restProps,
    className,
    'data-c': getCompPath('card', props)
  }

  return <Box {...cardProps} />
}
