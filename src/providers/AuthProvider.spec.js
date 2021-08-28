import { AuthProvider } from './AuthProvider'
import { renderWithRedux } from '../tests/utils/render'

describe('AuthProvider', () => {

  const render = (state = {}) => {
    return renderWithRedux((
      <AuthProvider>
        {isLoggedIn =>
          isLoggedIn ? (
            <div>User is logged in</div>
          ) : (
            <div>User is not logged in</div>
          )
        }
      </AuthProvider>
    ), {
      initialState: state
    })
  }

  it('should return true', () => {
    const { store, getByText } = render({
      user: {
        isLoggedIn: true,
        token: 'token'
      }
    })
    expect(store.getState().user.isLoggedIn).toBeTruthy()
    expect(getByText('User is logged in')).toBeInTheDocument()
  })

  it('should return false', () => {
    const { store, getByText } = render()
    expect(store.getState().user.isLoggedIn).toBeFalsy()
    expect(getByText('User is not logged in')).toBeInTheDocument()
  })
})