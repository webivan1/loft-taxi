import { LoginPage } from './LoginPage'
import { renderWithRedux } from '../../tests/utils/render'

describe('LoginPage', () => {
  it('should render component', () => {
    renderWithRedux(<LoginPage />)
  })
})