import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAsync } from '../../../store/auth/register/register.actions'
import { useHistory } from 'react-router-dom'

export const useRegisterForm = () => {
  const dispatch = useDispatch()
  const router = useHistory()
  const { loader, error, success } = useSelector(({ register }) => register)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    if (loader) {
      return
    }

    event.preventDefault()
    dispatch(addUserAsync({ email, name, password }))
  }

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangeName = (e) => setName(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        // go to login page
        router.push('/')
      }, 2000)
    }
  }, [success])

  return {
    email,
    name,
    password,
    loader,
    error,
    success,
    handleSubmit,
    handleChangeEmail,
    handleChangeName,
    handleChangePassword
  }
}