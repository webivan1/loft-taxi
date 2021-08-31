import { ProfilePage } from './ProfilePage'
import { renderWithRedux } from '../../tests/utils/render'

describe('ProfilePage', () => {
  it('should render component', () => {
    renderWithRedux(<ProfilePage />)
  })
})