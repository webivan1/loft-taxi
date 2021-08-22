import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../theme'
import { AppLayout } from './AppLayout'

describe('AppLayout', () => {
  it('should render component', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppLayout>
          <p>Child test text</p>
        </AppLayout>
      </ThemeProvider>
    )

    expect(getByText('Child test text')).toBeInTheDocument()
  })
})