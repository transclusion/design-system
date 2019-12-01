import React from 'react'
import {useIconClass} from '../providers'

export interface IconProps {
  symbol?: string
}

export function Icon({symbol, ...restProps}: IconProps) {
  return (
    <svg {...restProps} className={useIconClass({symbol})} data-symbol={symbol} viewBox="0 0 24 24">
      <use xlinkHref={`#sn-${symbol}`} />
    </svg>
  )
}
