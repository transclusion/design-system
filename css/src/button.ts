import {css} from './_util'
import {Theme, ThemeColor} from './types'

export interface ButtonProps {
  color?: 'primary'
}

const buttonBaseTemplate = () => css`
  .sn-btn {
    outline: none;
    cursor: pointer;
  }
`

const buttonThemeNoneTemplate = ({theme}: {theme: Theme}) => css`
  .sn-btn__inner {
    color: ${theme.button.none.enabled.fg};
    background-color: ${theme.button.none.enabled.bg};
  }

  @media (hover: hover) {
    .sn-btn:hover > .sn-btn__inner {
      color: ${theme.button.none.hover.fg};
      background-color: ${theme.button.none.hover.bg};
    }

    .sn-btn:active > .sn-btn__inner {
      color: ${theme.button.none.pressed.fg};
      background-color: ${theme.button.none.pressed.bg};
    }
  }
`

const buttonThemeColorTemplate = ({buttonKey, c}: {buttonKey: string; c: ThemeColor}) => css`
  .sn-btn--c\\:${buttonKey} > .sn-btn__inner {
    color: ${c.enabled.fg};
    background-color: ${c.enabled.bg}
  }

  @media(hover:hover) {
    .sn-btn--c\\:${buttonKey}:hover > .sn-btn__inner {
      color: ${c.hover.fg};
      background-color: ${c.hover.bg}
    }

    .sn-btn--c\\:${buttonKey}:active > .sn-btn__inner {
      color: ${c.pressed.fg};
      background-color: ${c.pressed.bg}
    }
  }
`

export function buttonBaseCss() {
  return buttonBaseTemplate()
}

export function buttonThemeCss(theme: Theme) {
  let str = ''

  str += buttonThemeNoneTemplate({theme})

  const buttonKeys = Object.keys(theme.button)
  for (const buttonKey of buttonKeys) {
    if (buttonKey !== 'none') {
      const c: ThemeColor = (theme.button as any)[buttonKey]
      str += buttonThemeColorTemplate({buttonKey, c})
    }
  }

  return str
}

export function buttonClassName(_: Theme, props: ButtonProps) {
  let str = 'sn-btn'

  if (props.color) {
    str += ` sn-btn--c:${props.color}`
  }

  return str
}

export function buttonInnerClassName(_: Theme, __: ButtonProps) {
  return 'sn-btn__inner'
}
