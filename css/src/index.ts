import {bgBaseCss, bgThemeCss} from './bg'
import {buttonBaseCss, buttonThemeCss} from './button'
import {fgBaseCss, fgThemeCss} from './fg'
import {headingBaseCss, headingThemeCss} from './heading'
import {iconBaseCss, iconThemeCss} from './icon'
import {inlineBaseCss, inlineThemeCss} from './inline'
import {paddingBaseCss, paddingThemeCss} from './padding'
import {rootBaseCss, rootThemeCss} from './root'
import {stackBaseCss, stackThemeCss} from './stack'
import {textBaseCss, textThemeCss} from './text'
import {Theme} from './types'

export * from './bg'
export * from './button'
export * from './fg'
export * from './heading'
export * from './icon'
export * from './inline'
export * from './padding'
export * from './stack'
export * from './text'
export * from './types'

export {default as defaultTheme} from './theme'

export function baseCss() {
  return [
    rootBaseCss(),
    bgBaseCss(),
    fgBaseCss(),
    paddingBaseCss(),
    buttonBaseCss(),
    headingBaseCss(),
    textBaseCss(),
    stackBaseCss(),
    inlineBaseCss(),
    iconBaseCss()
  ].join('')
}

export function themeCss(theme: Theme) {
  return [
    rootThemeCss(theme),
    bgThemeCss(theme),
    fgThemeCss(theme),
    paddingThemeCss(theme),
    buttonThemeCss(theme),
    headingThemeCss(theme),
    textThemeCss(theme),
    stackThemeCss(theme),
    inlineThemeCss(theme),
    iconThemeCss(theme)
  ].join('')
}

export function css(theme: Theme) {
  return [baseCss(), themeCss(theme)].join('')
}
