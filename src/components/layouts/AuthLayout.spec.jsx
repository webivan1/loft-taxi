import { render } from '@testing-library/react'
import { AuthLayout } from './AuthLayout'

describe('AuthLayout', () => {
  it('should render component', () => {
    const { getByText } = render(
      <AuthLayout>
        <p>Child test text</p>
      </AuthLayout>
    )

    expect(getByText('Child test text')).toBeInTheDocument()
  })
})