import { useContext, useState } from 'react'
import { RouterContext } from '../../../RouterContext'

export const useRegisterForm = () => {
  const { navigateTo } = useContext(RouterContext)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigateTo('/login')
  }

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangeName = (e) => setName(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  return {
    email,
    name,
    password,
    handleSubmit,
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    navigateTo
  }
}