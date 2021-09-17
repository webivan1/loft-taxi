import { OrderForm } from './OrderForm'
import { renderWithRedux } from '../../tests/utils/render'

describe('OrderForm', () => {
  it('should render component', () => {
    const fn = jest.fn()
    const { getByTestId } = renderWithRedux(<OrderForm onSubmit={fn} />)
    expect(getByTestId('from-destination')).toBeInTheDocument()
    expect(getByTestId('to-destination')).toBeInTheDocument()
  })
})