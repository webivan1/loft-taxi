import { render } from '@testing-library/react'
import { RegisterForm } from './RegisterForm'

describe('RegisterForm', () => {
  it('should display component', () => {
    const { getByTestId } = render(<RegisterForm />)
    expect(getByTestId('reg-form')).toBeInTheDocument()
  })

  it('should contain some fields', () => {
    const { getByTestId } = render(<RegisterForm />)
    expect(getByTestId('reg-email')).toBeInTheDocument()
    expect(getByTestId('reg-name')).toBeInTheDocument()
    expect(getByTestId('reg-password')).toBeInTheDocument()
    expect(getByTestId('reg-btn')).toBeInTheDocument()
  })
})