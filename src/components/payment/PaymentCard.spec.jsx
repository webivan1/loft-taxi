import { render } from '@testing-library/react'
import { PaymentCard } from './PaymentCard'

describe('PaymentCard', () => {
  it('should render component with props', () => {
    const props = {
      cardNumber: '1111 2222 3333 4444',
      date: '08/28'
    }
    const { getByTestId, getAllByTestId } = render(<PaymentCard {...props} />)

    expect(getByTestId('card-date').textContent).toMatch(props.date)

    const cardNumbers = props.cardNumber.split(' ')

    const collection = getAllByTestId('card-number-item')

    collection.forEach(numberElement => {
      const value = numberElement.textContent.trim()
      expect(cardNumbers.includes(value)).toBeTruthy()
      cardNumbers.splice(cardNumbers.indexOf(value), 1)
    })
  })

  it('should render invalid props', () => {
    const props = {
      cardNumber: '0-1-HelloWorld-2',
      date: 'DateTest'
    }
    const { getByTestId } = render(<PaymentCard {...props} />)

    expect(getByTestId('card-date').textContent).toMatch(props.date)
    expect(getByTestId('card-number-item').textContent).toMatch('012')
  })
})