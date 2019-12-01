export type ThemeSpaceKey = 'xs' | 's' | 'm' | 'l' | 'xl'

export interface ThemeBackground {
  '1': string
  '2': string
  '3': string
  '4': string
}

export type ThemeBackgroundKey = '1' | '2' | '3' | '4'

export interface ThemeForeground {
  '1': string
  '2': string
  '3': string
  '4': string
}

export interface ThemeBreakpoint {
  xs: string
  s: string
  m: string
  l: string
  xl: string
}

export interface ThemeSpace {
  xxxxs: string
  xxxs: string
  xxs: string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
}

export interface ThemeTextSize {
  fontSize: string
  lineHeight: string
  transformY: string
  marginTop: string
}

export interface ThemeText {
  '1': ThemeTextSize
  '2': ThemeTextSize
  '3': ThemeTextSize
  '4': ThemeTextSize
  '5': ThemeTextSize
}

export interface ThemeHeading {
  '1': ThemeTextSize
  '2': ThemeTextSize
  '3': ThemeTextSize
  '4': ThemeTextSize
  '5': ThemeTextSize
  '6': ThemeTextSize
  '7': ThemeTextSize
}

export interface ThemeColorState {
  bg: string
  fg: string
}

export interface ThemeColor {
  enabled: ThemeColorState
  disabled: ThemeColorState
  hover: ThemeColorState
  focus: ThemeColorState
  pressed: ThemeColorState
  selected: ThemeColorState
  dragged: ThemeColorState
}

export interface ThemeColors {
  none: ThemeColor
  primary: ThemeColor
}

export interface Theme {
  bg: ThemeBackground
  breakpoint: ThemeBreakpoint
  fg: ThemeForeground
  heading: ThemeHeading
  text: ThemeText
  space: ThemeSpace
  button: ThemeColors
}
