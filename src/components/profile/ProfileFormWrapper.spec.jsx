import { render } from '@testing-library/react'
import { ProfileFormWrapper } from './ProfileFormWrapper'

describe('ProfileFormWrapper', () => {
  it('should render component', () => {
    const fn = jest.fn()
    render(<ProfileFormWrapper onSubmit={fn} />)
  })
})