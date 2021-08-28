import { screen } from '@testing-library/react'
import { App } from './App'
import { renderWithRedux } from './tests/utils/render'

describe('App', () => {
  it('should render App component', () => {
    renderWithRedux(<App />)
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })
})
