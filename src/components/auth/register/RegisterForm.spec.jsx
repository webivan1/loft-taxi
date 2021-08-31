import { RegisterForm } from './RegisterForm'
import { renderWithRedux } from '../../../tests/utils/render'

describe('RegisterForm', () => {
  it('should display component', () => {
    const { getByTestId } = renderWithRedux(<RegisterForm />)
    expect(getByTestId('reg-form')).toBeInTheDocument()
  })

  it('should contain some fields', () => {
    const { getByTestId } = renderWithRedux(<RegisterForm />)
    expect(getByTestId('reg-email')).toBeInTheDocument()
    expect(getByTestId('reg-name')).toBeInTheDocument()
    expect(getByTestId('reg-password')).toBeInTheDocument()
    expect(getByTestId('reg-btn')).toBeInTheDocument()
  })
})