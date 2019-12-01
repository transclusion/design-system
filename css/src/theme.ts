import {
  Theme,
  ThemeBackground,
  ThemeColors,
  ThemeForeground,
  ThemeHeading,
  ThemeSpace,
  ThemeText
} from './types'

export const bg: ThemeBackground = {
  '1': '#fff',
  '2': '#f1f3f6',
  '3': '#e4e8ed',
  '4': '#cad1dc'
}

export const fg: ThemeForeground = {
  '1': '#121723',
  '2': '#262e3d',
  '3': '#3c4558',
  '4': '#515d72'
}

export const breakpoint = {
  xs: 320 + 'px',
  s: 320 * 2 + 'px',
  m: 320 * 3 + 'px',
  l: 320 * 4 + 'px',
  xl: 320 * 5 + 'px'
}

export const space: ThemeSpace = {
  xxxxs: '0.125rem',
  xxxs: '0.375rem',
  xxs: '0.5rem',
  xs: '0.75rem',
  s: '1.25rem',
  m: '2rem',
  l: '3.25rem',
  xl: '5.25rem',
  xxl: '8.5rem',
  xxxl: '13.75rem',
  xxxxl: '22.25rem'
}

export const text: ThemeText = {
  '1': {fontSize: '24px', lineHeight: '32px', transformY: '8px', marginTop: '-14px'},
  '2': {fontSize: '20px', lineHeight: '28px', transformY: '7px', marginTop: '-13px'},
  '3': {fontSize: '16px', lineHeight: '24px', transformY: '7px', marginTop: '-12px'},
  '4': {fontSize: '14px', lineHeight: '20px', transformY: '5px', marginTop: '-10px'},
  '5': {fontSize: '12px', lineHeight: '16px', transformY: '4px', marginTop: '-7px'}
}

export const heading: ThemeHeading = {
  '1': {fontSize: '60px', lineHeight: '60px', transformY: '8px', marginTop: '-16px'},
  '2': {fontSize: '48px', lineHeight: '52px', transformY: '9px', marginTop: '-17px'},
  '3': {fontSize: '36px', lineHeight: '44px', transformY: '9px', marginTop: '-17px'},
  '4': {fontSize: '30px', lineHeight: '36px', transformY: '7px', marginTop: '-14px'},
  '5': {fontSize: '20px', lineHeight: '28px', transformY: '7px', marginTop: '-13px'},
  '6': {fontSize: '16px', lineHeight: '24px', transformY: '7px', marginTop: '-12px'},
  '7': {fontSize: '14px', lineHeight: '20px', transformY: '5px', marginTop: '-10px'}
}

const button: ThemeColors = {
  none: {
    enabled: {bg: 'transparent', fg: 'inherit'},
    disabled: {bg: 'transparent', fg: '#afbaca'},
    hover: {bg: '#e4e8ed', fg: 'inherit'},
    focus: {bg: 'transparent', fg: '#fff'},
    pressed: {bg: '#cad1dc', fg: 'inherit'},
    selected: {bg: '#2276fc', fg: '#fff'},
    dragged: {bg: '#e4e8ed', fg: '#afbaca'}
  },
  primary: {
    enabled: {bg: '#2276fc', fg: '#fff'},
    disabled: {bg: '#cad1dc', fg: '#fff'},
    hover: {bg: '#1e63d0', fg: '#fff'},
    focus: {bg: '#cad1dc', fg: '#fff'},
    pressed: {bg: '#1b50a5', fg: '#fff'},
    selected: {bg: '#09f', fg: '#fff'},
    dragged: {bg: '#09f', fg: '#fff'}
  }
}

const theme: Theme = {
  bg,
  breakpoint,
  fg,
  heading,
  space,
  text,
  button
}

export default theme
