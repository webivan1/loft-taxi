import { AppHeader } from './AppHeader'
import { renderWithRedux } from '../../../tests/utils/render'

describe('AppHeader', function () {
  it('should contain some links', () => {
    const { getByText } = renderWithRedux(<AppHeader />)

    expect(getByText('Карта')).toBeInTheDocument()
    expect(getByText('Профиль')).toBeInTheDocument()
    expect(getByText('Выйти')).toBeInTheDocument()
  })
})