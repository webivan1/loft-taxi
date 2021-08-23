import { render } from '@testing-library/react'
import { App } from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

describe('App', () => {
  it('should render App component', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  })
})
