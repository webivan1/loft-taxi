import { RegisterPage } from './RegisterPage'
import { renderWithRedux } from '../../tests/utils/render'

describe('RegisterPage', () => {
  it('should render component', () => {
    renderWithRedux(<RegisterPage />)
  })
})