import { render } from '@testing-library/react'
import { AppHeader } from './AppHeader'

describe('AppHeader', function () {
  it('should contain some links', () => {
    const { getByText } = render(<AppHeader />)

    expect(getByText('Карта')).toBeInTheDocument()
    expect(getByText('Профиль')).toBeInTheDocument()
    expect(getByText('Выйти')).toBeInTheDocument()
  })
})