import {PaddingProps} from '@transclusion/css'
import React from 'react'
import {useButtonClass, useButtonInnerClass, usePaddingClass} from '../providers/theme'
import {classNames, getCompPath} from './_helpers'
import {Icon} from './icon'
import {Inline} from './inline'
import {Text} from './text'
import {ComponentProps} from './types'

export interface ButtonProps extends ComponentProps, PaddingProps {
  color?: 'primary'
  size?: 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'
  symbol?: string
}

export function Button(props: ButtonProps & React.HTMLProps<HTMLButtonElement>) {
  const {
    as: asProp,
    children: childrenProp,
    color,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    size,
    symbol,
    ...restProps
  } = props
  const className = classNames(props.className, useButtonClass({color}))

  const buttonProps = {
    ...restProps,
    as: asProp || 'button',
    className,
    'data-c': getCompPath('button', props)
  }

  const innerProps = {
    className: classNames(
      useButtonInnerClass(),
      usePaddingClass({
        padding: padding || 'xs',
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      })
    )
  }

  const children = (
    <div {...innerProps}>
      <Inline spacing="xxxs" style={{display: 'flex', alignItems: 'center'}}>
        {symbol && <Icon symbol={symbol} />}
        {childrenProp && <Text size={size}>{childrenProp}</Text>}
      </Inline>
    </div>
  )

  return React.createElement(asProp || 'button', buttonProps, children)
}
