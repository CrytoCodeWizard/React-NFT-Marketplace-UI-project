import { theme as darkTheme } from '../src/theme/dark'
import { theme as lightTheme } from '../src/theme/light'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import IotaWeb3Provider from '../src/web3/IotaWeb3Provider'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </IotaWeb3Provider>
  )
}

addDecorator(
  withThemes(null, [darkTheme, lightTheme], {
    providerFn
  })
)
