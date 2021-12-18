import { overrides } from './overrides'

const TYPE = 'light'

// --------------------------------------------
// C O L O R S
// ------------------
const COLOR_COMMON_WHITE = '#ffffff'
const COLOR_COMMON_BLACK = '#000000'
const COLOR_COMMON_TRANSPARENT = '#00000000'

const COLOR_GREY_50 = '#f6f8fc'
const COLOR_GREY_100 = '#e8eefb'
const COLOR_GREY_200 = '#e0e4ed'
const COLOR_GREY_300 = '#b8c2d6'
const COLOR_GREY_400 = '#b0bfd9'
const COLOR_GREY_500 = '#909fbe'
const COLOR_GREY_600 = '#677695'
const COLOR_GREY_700 = '#485776'
const COLOR_GREY_800 = '#293858'
const COLOR_GREY_900 = '#131f37'
const COLOR_GREY_1000 = '#0d1424'

const COLOR_PRIMARY_LIGHTER = '#f5c9ab'
const COLOR_PRIMARY_LIGHT = '#eda674'
const COLOR_PRIMARY_MAIN = '#e4833e'
const COLOR_PRIMARY_DARK = '#c56521'
const COLOR_PRIMARY_DARKER = '#613313'

const COLOR_ERROR_LIGHT = '#fba69e'
const COLOR_ERROR_MAIN = '#f67367'
const COLOR_ERROR_DARK = '#d63e30'
const COLOR_ERROR_CONTRAST = COLOR_COMMON_WHITE

const COLOR_SUCCESS_LIGHT = '#64f49e'
const COLOR_SUCCESS_MAIN = '#1ada67'
const COLOR_SUCCESS_DARK = '#259251'
const COLOR_SUCCESS_CONTRAST = COLOR_COMMON_WHITE

const COLOR_WARNING_LIGHT = '#ffde9d'
const COLOR_WARNING_MAIN = '#ffca62'
const COLOR_WARNING_DARK = '#e0a228'
const COLOR_WARNING_CONTRAST = COLOR_COMMON_WHITE

const COLOR_INFO_LIGHT = '#87c5ff'
const COLOR_INFO_MAIN = '#108cff'
const COLOR_INFO_DARK = '#0f4ceb'
const COLOR_INFO_CONTRAST = COLOR_COMMON_WHITE

const GRADIENT_LIGHT = `linear-gradient(65deg, ${COLOR_GREY_200} 15%, ${COLOR_GREY_50} 100%)`
const GRADIENT_DARK = `linear-gradient(65deg, ${COLOR_GREY_1000} 15%, ${COLOR_GREY_900} 100%)`
const GRADIENT_PRIMARY = `linear-gradient(65deg, ${COLOR_PRIMARY_MAIN} 15%, ${COLOR_PRIMARY_DARK} 100%)`

const palette = {
  background: {
    paper: COLOR_COMMON_WHITE,
    default: COLOR_GREY_50,
    light: COLOR_GREY_100,
    medium: COLOR_GREY_200,
    border: COLOR_GREY_200,
    gradient: GRADIENT_LIGHT
  },
  text: {
    primary: COLOR_GREY_900,
    secondary: COLOR_GREY_700,
    disabled: COLOR_GREY_500,
    hint: COLOR_GREY_300,
    divider: COLOR_GREY_300
  },
  grey: {
    50: COLOR_GREY_50,
    100: COLOR_GREY_100,
    200: COLOR_GREY_200,
    300: COLOR_GREY_300,
    400: COLOR_GREY_400,
    500: COLOR_GREY_500,
    600: COLOR_GREY_600,
    700: COLOR_GREY_700,
    800: COLOR_GREY_800,
    900: COLOR_GREY_900,
    1000: COLOR_GREY_1000
  },
  primary: {
    lighter: COLOR_PRIMARY_LIGHTER,
    light: COLOR_PRIMARY_LIGHT,
    main: COLOR_PRIMARY_MAIN,
    dark: COLOR_PRIMARY_DARK,
    darker: COLOR_PRIMARY_DARKER,
    contrastText: COLOR_COMMON_WHITE
  },
  secondary: {
    light: COLOR_GREY_200,
    main: COLOR_GREY_300,
    dark: COLOR_GREY_400,
    contrastText: COLOR_GREY_800
  },
  error: {
    light: COLOR_ERROR_LIGHT,
    main: COLOR_ERROR_MAIN,
    dark: COLOR_ERROR_DARK,
    contrastText: COLOR_ERROR_CONTRAST
  },
  success: {
    light: COLOR_SUCCESS_LIGHT,
    main: COLOR_SUCCESS_MAIN,
    dark: COLOR_SUCCESS_DARK,
    contrastText: COLOR_SUCCESS_CONTRAST
  },
  warning: {
    light: COLOR_WARNING_LIGHT,
    main: COLOR_WARNING_MAIN,
    dark: COLOR_WARNING_DARK,
    contrastText: COLOR_WARNING_CONTRAST
  },
  info: {
    light: COLOR_INFO_LIGHT,
    main: COLOR_INFO_MAIN,
    dark: COLOR_INFO_DARK,
    contrastText: COLOR_INFO_CONTRAST
  },
  gradients: {
    daylight: GRADIENT_LIGHT,
    midnight: GRADIENT_DARK,
    primary: GRADIENT_PRIMARY
  },
  common: {
    white: COLOR_COMMON_WHITE,
    black: COLOR_COMMON_BLACK,
    transparent: COLOR_COMMON_TRANSPARENT
  }
}

// --------------------------------------------
// T Y P O G R A P H Y
// ------------------
const FONT_FAMILY_HEADLINE = 'Lato'
const FONT_FAMILY_BODY = 'Lato'

const FONT_WEIGHT_HEADLINE = 800
const FONT_WEIGHT_BODY = 400
const FONT_WEIGHT_BUTTON = 600

const LINE_HEIGHT_HEADLINE = 1.15
const LINE_HEIGHT_BODY = 1.5
const LINE_HEIGHT_NONE = 1

const LETTER_SPACING_HEADLINE = '0em'
const LETTER_SPACING_BODY = '0em'
// const LETTER_SPACING_OVERLINE = '0.1em'
// const LETTER_SPACING_NONE = '0em'

const TYPE_SPACING = [10, 12, 14, 16, 20, 24, 32, 40, 48, 62, 124]

const BASE_HEADLINE_STYLES = {
  fontFamily: FONT_FAMILY_HEADLINE,
  fontWeight: FONT_WEIGHT_HEADLINE,
  lineHeight: LINE_HEIGHT_HEADLINE,
  letterSpacing: LETTER_SPACING_HEADLINE
}
const BASE_BODY_STYLES = {
  fontFamily: FONT_FAMILY_BODY,
  fontWeight: FONT_WEIGHT_BODY,
  lineHeight: LINE_HEIGHT_BODY,
  letterSpacing: LETTER_SPACING_BODY
}
const BASE_BUTTON_STYLES = {
  fontFamily: FONT_FAMILY_BODY,
  fontWeight: FONT_WEIGHT_BUTTON,
  lineHeight: LINE_HEIGHT_NONE,
  letterSpacing: LETTER_SPACING_HEADLINE
}

const typography = {
  fontFamily: [
    `${FONT_FAMILY_BODY}`,
    'Inter',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  h1: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[9] },
  h2: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[8] },
  h3: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[7] },
  h4: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[6] },
  h5: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[5] },
  h6: { ...BASE_HEADLINE_STYLES, fontSize: TYPE_SPACING[4] },
  subtitle1: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[4] },
  subtitle2: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[3] },
  body1: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[3] },
  body2: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[2] },
  button: { ...BASE_BUTTON_STYLES, fontSize: TYPE_SPACING[3] },
  button2: { ...BASE_BUTTON_STYLES, fontSize: TYPE_SPACING[2] },
  caption: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[1] },
  overline: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[1] }
}

const spacing = [0, 4, 8, 12, 16, 24, 32, 40, 60, 80, 120, 160]

const radius = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
  button: 8,
  card: 12
}

export const theme = {
  type: TYPE,
  palette,
  overrides: { ...overrides },
  typography,
  spacing,
  radius
}
