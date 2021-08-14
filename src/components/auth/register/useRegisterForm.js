import { useContext, useState } from 'react'
import { UserContext } from '../../../userContext'

export const useRegisterForm = () => {
  const { handleChangePage } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleChangePage('/login')
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
    handleChangePage
  }
}