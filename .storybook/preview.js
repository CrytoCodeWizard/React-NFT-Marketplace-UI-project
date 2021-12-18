import { theme as darkTheme } from '../src/theme/dark'
import { theme as lightTheme } from '../src/theme/light'
import { StyledEngineProvider} from '@mui/material/styles'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['👋 Get started', 'Layout', 'Inputs', 'Navigation', 'Surfaces', 'Feedback', 'Data Display', 'Lab'],
    },
  }
}

const providerFn = ({ theme, children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

addDecorator(
  withThemes(null, [darkTheme, lightTheme], {
    providerFn
  })
)
