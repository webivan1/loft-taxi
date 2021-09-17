import { render } from '@testing-library/react'
import { OrderCanceled } from './OrderCanceled'

describe('OrderCanceled', () => {
  it('should render component', () => {
    const {getByText} = render(<OrderCanceled />)

    expect(getByText('Вы ещё не настроили свой профиль')).toBeInTheDocument()
    expect(getByText('Перейти в профиль')).toBeInTheDocument()
  })
})