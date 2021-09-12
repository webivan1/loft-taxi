import { ButtonForm } from '../../ui/ButtonForm'
import { Link } from 'react-router-dom'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { loginAsync } from '../../../store/auth/login/login.actions'
import * as yup from 'yup'
import { useFormik } from 'formik'

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
  notify: {
    marginBottom: '15px'
  }
});

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export const LoginForm = () => {
  const dispatch = useDispatch()
  const { loader, error } = useSelector(({ login }) => login)

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      !loader && dispatch(loginAsync(values))
    }
  })

  const classes = useStyles()

  return (
    <form data-testid="login-form" noValidate onSubmit={form.handleSubmit}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Email"
            placeholder="mail@mail.ru"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
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
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            error={form.touched.password && Boolean(form.errors.password)}
            helperText={form.touched.password && form.errors.password}
            margin="none"
            fullWidth
            data-testid="login-password"
          />
          {/*<div className={classes.forgotPassword}>*/}
          {/*  <a href="#/forgot-pass">Забыли пароль?</a>*/}
          {/*</div>*/}
        </Grid>
      </Grid>

      {error && <Alert className={classes.notify} severity="error">{error}</Alert>}

      <ButtonForm disabled={loader} data-testid="login-btn" fullWidth type="submit">
        Войти
      </ButtonForm>

      <div className={classes.register}>
        Новый пользователь?{' '}
        <Link to="/register">
          Регистрация
        </Link>
      </div>
    </form>
  )
}