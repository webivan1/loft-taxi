import { AuthFormWrapper } from '../../components/auth/AuthFormWrapper'
import { LoginForm } from '../../components/auth/login/LoginForm'

export const LoginPage = () => (
  <AuthFormWrapper heading="Войти">
    <LoginForm/>
  </AuthFormWrapper>
)