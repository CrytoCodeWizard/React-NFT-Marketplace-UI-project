import { overrides } from './overrides'

const TYPE = 'light'

const grey = {
  50: '#fcfcfc',
  100: '#dadbdc',
  200: '#b9babc',
  300: '#989a9c',
  400: '#78797c',
  500: '#58595B',
  600: '#48494b',
  700: '#38393a',
  800: '#28292a',
  900: '#191919',
  1000: '#0d1424'
}

const GRADIENT_LIGHT = `linear-gradient(65deg, ${grey[200]} 15%, ${grey[50]} 100%)`
const GRADIENT_DARK = `linear-gradient(65deg, ${grey[1000]} 15%, ${grey[900]} 100%)`

const palette = {
  background: {
    paper: '#ffffff',
    default: grey[50],
    light: grey[100],
    medium: grey[200],
    border: grey[200],
    gradient: GRADIENT_LIGHT
  },
  text: {
    primary: grey[1000],
    secondary: grey[800],
    disabled: grey[500],
    hint: grey[300],
    divider: grey[300]
  },
  grey: {
    ...grey
  },
  primary: {
    main: '#0FD698'
  },
  secondary: {
    main: '#0FD698'
  },
  error: {
    main: '#f67367'
  },
  success: {
    main: '#1ada67'
  },
  warning: {
    main: '#ffca62'
  },
  info: {
    main: '#108cff'
  },
  gradients: {
    daylight: GRADIENT_LIGHT,
    midnight: GRADIENT_DARK
  }
}

// --------------------------------------------
// T Y P O G R A P H Y
// ------------------
const FONT_FAMILY = 'Inter'

const TYPE_SPACING = [10, 12, 14, 16, 20, 24, 32, 40, 48, 62, 124]

const BASE_HEADLINE_STYLES = {
  fontFamily: '"Sarpanch", sans-serif',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '0em'
}
const BASE_BODY_STYLES = {
  fontFamily: FONT_FAMILY,
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0em'
}
const BASE_BUTTON_STYLES = {
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: '0em'
}

const typography = {
  fontFamily: [
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
  overline: { ...BASE_BODY_STYLES, fontSize: TYPE_SPACING[1] },
  fontWeightBold: 800,
  fontWeightMedium: 800,
  fontWeightRegular: 400,
  fontWeightLight: 400
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
