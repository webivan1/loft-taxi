import { userStorage } from '../store/user/user.storage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/user/user.actions'

export const AuthProvider = ({ children }) => {
  const token = userStorage.getToken()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(({ user }) => user)

  useEffect(() => {
    if (token) {
      dispatch(addUser(token))
      userStorage.setToken(token)
    }
  }, [dispatch])

  return children(isLoggedIn)
}