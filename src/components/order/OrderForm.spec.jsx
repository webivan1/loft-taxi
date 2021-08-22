import { render } from '@testing-library/react'
import { OrderForm } from './OrderForm'

describe('OrderForm', () => {
  it('should render component', () => {
    const fn = jest.fn()
    const { getByTestId } = render(<OrderForm onSubmit={fn} />)
    expect(getByTestId('from-destination')).toBeInTheDocument()
    expect(getByTestId('to-destination')).toBeInTheDocument()
  })
})