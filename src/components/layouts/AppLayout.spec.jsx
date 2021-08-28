import { AppLayout } from './AppLayout'
import { renderWithRedux } from '../../tests/utils/render'

describe('AppLayout', () => {
  it('should render component', () => {
    const { getByText } = renderWithRedux(
      <AppLayout>
        <p>Child test text</p>
      </AppLayout>
    )

    expect(getByText('Child test text')).toBeInTheDocument()
  })
})