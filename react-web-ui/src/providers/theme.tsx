import {
  bgClassName,
  BgProps,
  buttonClassName,
  buttonInnerClassName,
  ButtonProps,
  defaultTheme,
  fgClassName,
  FgProps,
  headingClassName,
  HeadingProps,
  inlineClassName,
  InlineProps,
  paddingClassName,
  PaddingProps,
  stackClassName,
  StackProps,
  textClassName,
  TextProps,
  Theme
} from '@transclusion/css'
import React from 'react'
import {classNames} from '../components/_helpers'

export interface ThemeProps {
  children: React.ReactNode
  theme: Theme
}

export const ThemeContext = React.createContext<Theme | null>(null)

export function ThemeProvider(props: ThemeProps) {
  return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>
}

export function useTheme() {
  const theme = React.useContext(ThemeContext)

  if (!theme) {
    return defaultTheme
    // throw new Error('no theme in context')
  }

  return theme
}

export function usePaddingClass(props: PaddingProps) {
  return paddingClassName(useTheme(), props)
}

export function useBgClass(props: BgProps) {
  return classNames(bgClassName(useTheme(), props))
}

export function useStackClass(props: StackProps) {
  return stackClassName(useTheme(), props)
}

export function useInlineClass(props: InlineProps) {
  return inlineClassName(useTheme(), props)
}

export function useFgClass(props: FgProps) {
  return fgClassName(useTheme(), props)
}

export function useTextClass(props: TextProps) {
  return textClassName(useTheme(), props)
}

export function useButtonClass(props: ButtonProps) {
  return buttonClassName(useTheme(), props)
}

export function useButtonInnerClass(props: ButtonProps = {}) {
  return buttonInnerClassName(useTheme(), props)
}

export function useHeadingClass(props: HeadingProps) {
  return headingClassName(useTheme(), props)
}

export function useIconClass(props: {symbol?: string}) {
  return `sn-icon sn-icon--s:${props.symbol}`
}
