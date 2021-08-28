import { ProfileFormWrapper } from './ProfileFormWrapper'
import { renderWithRedux } from '../../tests/utils/render'

describe('ProfileFormWrapper', () => {
  it('should render component', () => {
    const fn = jest.fn()
    renderWithRedux(<ProfileFormWrapper onSubmit={fn} />)
  })
})