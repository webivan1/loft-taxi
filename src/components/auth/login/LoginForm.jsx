import { ButtonForm } from '../../ui/ButtonForm'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../AuthContext'
import { RouterContext } from '../../../RouterContext'

const useStyles = makeStyles({
  fieldWrapper: {
    marginBottom: '25px'
  },
  wrapper: {
    marginBottom: '20px'
  },
  forgotPassword: {
    marginTop: '12px',
    textAlign: 'right',
    '& > a': {
      fontSize: '16px',
      color: '#828282',
      '&:hover, &:active': {
        color: darken('#828282', 0.2)
      }
    }
  },
  register: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '16px',
    color: '#828282',
    '& > a': {
      color: '#f9bf5b',
      '&:hover, &:active': {
        color: darken('#f9bf5b', 0.2)
      }
    }
  },
});

export const LoginForm = () => {
  const { login } = useContext(AuthContext)
  const { navigateTo } = useContext(RouterContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    login(email, password)
    navigateTo('/map')
  }

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const classes = useStyles()

  return (
    <form data-testid="login-form" noValidate onSubmit={handleSubmit}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Email"
            placeholder="mail@mail.ru"
            value={email}
            onChange={handleChangeEmail}
            margin="none"
            fullWidth
            data-testid="login-email"
          />
        </Grid>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            type="password"
            label="Пароль"
            placeholder="******"
            value={password}
            onChange={handleChangePassword}
            margin="none"
            fullWidth
            data-testid="login-password"
          />
          <div className={classes.forgotPassword}>
            <a href="#/forgot-pass">Забыли пароль?</a>
          </div>
        </Grid>
      </Grid>
      <ButtonForm data-testid="login-btn" fullWidth type="submit">
        Войти
      </ButtonForm>

      <div className={classes.register}>
        Новый пользователь?{' '}
        <a href="#/register" onClick={() => navigateTo('/register')}>
          Регистрация
        </a>
      </div>
    </form>
  )
}