import { theme as darkTheme } from '../src/theme/dark'
import { theme as lightTheme } from '../src/theme/light'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import IotaWeb3Provider from '../src/web3/IotaWeb3Provider'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { Box } from '../src/components/layout/Box/Box'
import { CssBaseline } from '@mui/material'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const providerFn = ({ theme, children }) => {
  return (
    <IotaWeb3Provider>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.paper',
            p: 4
          }}
        >
          {children}
          <CssBaseline />
        </Box>
      </ThemeProvider>
    </IotaWeb3Provider>
  )
}

export const onThemeSwitch = (context) => {
  const parameters = {
    backgrounds: null
  }
  return {
    parameters
  }
}

addDecorator(
  withThemes(null, [darkTheme, lightTheme], {
    providerFn,
    onThemeSwitch
  })
)
