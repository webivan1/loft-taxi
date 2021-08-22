import { render } from '@testing-library/react'
import { OrderSuccess } from './OrderSuccess'

describe('OrderSuccess', () => {
  it('should render component', () => {
    const fn = jest.fn()
    const {getByText} = render(<OrderSuccess onReset={fn} />)

    expect(getByText('Заказ размещен')).toBeInTheDocument()
    expect(getByText('Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.')).toBeInTheDocument()
    expect(getByText('Сделать новый заказ')).toBeInTheDocument()
  })
})