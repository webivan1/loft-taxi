import { render } from '@testing-library/react'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('should display component', () => {
    const { getByTestId } = render(<LoginForm />)
    expect(getByTestId('login-form')).toBeInTheDocument()
  })

  it('should contain some fields', () => {
    const { getByTestId } = render(<LoginForm />)
    expect(getByTestId('login-email')).toBeInTheDocument()
    expect(getByTestId('login-password')).toBeInTheDocument()
    expect(getByTestId('login-btn')).toBeInTheDocument()
  })
})