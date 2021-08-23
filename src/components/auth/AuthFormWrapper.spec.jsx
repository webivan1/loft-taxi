import { render } from '@testing-library/react'
import { AuthFormWrapper } from './AuthFormWrapper'

describe('AuthFormWrapper', () => {
  it('should render component with props', () => {
    const { getByText } = render(
      <AuthFormWrapper heading="Test heading">
        <p>Test text</p>
      </AuthFormWrapper>
    )

    expect(getByText('Test heading')).toBeInTheDocument()
    expect(getByText('Test text')).toBeInTheDocument()
  })
})