import { PaymentFormWrapper } from './PaymentFormWrapper'
import { renderWithRedux } from '../../tests/utils/render'

describe('PaymentFormWrapper', () => {
  it('should render component', () => {
    const fn = jest.fn()
    renderWithRedux(<PaymentFormWrapper onSubmit={fn} />)
  })
})