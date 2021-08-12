import { useContext, useState } from 'react'
import { UserContext } from '../../../userContext'

export const useLoginForm = () => {
  const { handleLogIn, handleChangePage } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogIn()
    handleChangePage('/app')
  }

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  return {
    email,
    password,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleChangePage
  }
}