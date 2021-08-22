import { AuthFormWrapper } from '../../components/auth/AuthFormWrapper'
import { RegisterForm } from '../../components/auth/register/RegisterForm'

export const RegisterPage = () => (
  <AuthFormWrapper heading="Регистрация">
    <RegisterForm/>
  </AuthFormWrapper>
)