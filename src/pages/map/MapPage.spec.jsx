import { MapPage } from './MapPage'
import { renderWithRedux } from '../../tests/utils/render'

describe('MapPage', () => {
  it('should render component', () => {
    renderWithRedux(<MapPage />)
  })
})