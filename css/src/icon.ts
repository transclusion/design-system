import {css} from './_util'
import {Theme} from './types'

export const iconBaseCss = () => css`
  .sn-icon {
    display: inline-block;
    vertical-align: top;
    background: currentColor;
    width: 1em;
    height: 1em;
  }
`

export const iconThemeCss = (_: Theme) => css``
