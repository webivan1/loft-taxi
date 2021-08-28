import { LoginForm } from './LoginForm'
import { renderWithRedux } from '../../../tests/utils/render'

describe('LoginForm', () => {
  it('should display component', () => {
    const { getByTestId } = renderWithRedux(<LoginForm />)
    expect(getByTestId('login-form')).toBeInTheDocument()
  })

  it('should contain some fields', () => {
    const { getByTestId } = renderWithRedux(<LoginForm />)
    expect(getByTestId('login-email')).toBeInTheDocument()
    expect(getByTestId('login-password')).toBeInTheDocument()
    expect(getByTestId('login-btn')).toBeInTheDocument()
  })
})