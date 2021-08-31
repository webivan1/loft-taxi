import { AuthLayout } from './AuthLayout'
import { renderWithRedux } from '../../tests/utils/render'

describe('AuthLayout', () => {
  it('should render component', () => {
    const { getByText } = renderWithRedux(
      <AuthLayout>
        <p>Child test text</p>
      </AuthLayout>
    )

    expect(getByText('Child test text')).toBeInTheDocument()
  })
})