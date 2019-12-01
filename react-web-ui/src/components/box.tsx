import {PaddingProps} from '@transclusion/css'
import React from 'react'
import {usePaddingClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {ComponentProps} from './types'

export interface BoxProps extends ComponentProps, PaddingProps {}

export function Box(props: BoxProps & React.HTMLProps<HTMLSpanElement>) {
  const {
    as: asProp,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...restProps
  } = props

  const className = classNames(
    props.className,
    usePaddingClass({padding, paddingTop, paddingRight, paddingBottom, paddingLeft})
  )

  const boxProps = {
    ...restProps,
    className,
    'data-c': getCompPath('box', props)
  }

  return React.createElement(asProp || 'div', boxProps)
}
