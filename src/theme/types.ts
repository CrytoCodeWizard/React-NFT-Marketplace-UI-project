import {
  Color,
  Theme as MuiTheme,
  DeprecatedThemeOptions as MuiThemeOptions
} from '@mui/material'
import { Palette as MuiPalette, PaletteColor } from '@mui/material/styles'
import { TypeBackground } from '@mui/material/styles/createPalette'

export interface Background extends TypeBackground {
  light?: string
  medium?: string
  border?: string
  gradient?: string
}
export interface Grey extends Color {
  1000?: string
}

export interface Gradients {
  daylight?: string
  midnight?: string
  primary?: string
}

export interface Primary extends PaletteColor {
  lighter?: string
  darker?: string
}

export interface Palette extends MuiPalette {
  background: Background
  grey: Grey
  gradients: Gradients
  primary: Primary
}

export interface Radius {
  none?: number
  small?: number
  medium?: number
  large?: number
  button?: number
  card?: number
}

export interface Theme extends MuiTheme {
  palette: Palette
  radius: Radius
}

export interface DeprecatedThemeOptions extends MuiThemeOptions {
  palette: Palette
  radius: Radius
}
