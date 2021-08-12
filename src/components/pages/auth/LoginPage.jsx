import { AuthFormWrapper } from '../../auth/AuthFormWrapper'
import { LoginForm } from '../../auth/login/LoginForm'

export const LoginPage = () => (
  <AuthFormWrapper heading="Войти">
    <LoginForm />
  </AuthFormWrapper>
)