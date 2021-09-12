import { ButtonForm } from '../../ui/ButtonForm'
import { Link } from 'react-router-dom'
import { Grid, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useRegisterForm } from './useRegisterForm'
import { makeStyles, darken } from '@material-ui/core/styles'

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

export const RegisterForm = () => {
  const {
    loader,
    error,
    success,
    form
  } = useRegisterForm()

  const classes = useStyles()

  return (
    <form data-testid="reg-form" noValidate onSubmit={form.handleSubmit}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Email*"
            placeholder="mail@mail.ru"
            name="email"
            autoComplete="off"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
            margin="none"
            fullWidth
            data-testid="reg-email"
          />
        </Grid>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Как вас зовут?*"
            placeholder="Петр Александрович"
            name="name"
            autoComplete="off"
            value={form.values.name}
            onChange={form.handleChange}
            error={form.touched.name && Boolean(form.errors.name)}
            helperText={form.touched.name && form.errors.name}
            margin="none"
            fullWidth
            data-testid="reg-name"
          />
        </Grid>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            type="password"
            label="Придумайте пароль*"
            autoComplete="off"
            placeholder="******"
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            error={form.touched.password && Boolean(form.errors.password)}
            helperText={form.touched.password && form.errors.password}
            margin="none"
            fullWidth
            data-testid="reg-password"
          />
        </Grid>
      </Grid>

      {error && <Alert className={classes.notify} severity="error">{error}</Alert>}
      {success && <Alert className={classes.notify} severity="success">{success}</Alert>}

      <ButtonForm disabled={loader} data-testid="reg-btn" fullWidth type="submit">
        Зарегистрироваться
      </ButtonForm>

      <div className={classes.register}>
        Уже зарегестрированны?{' '}
        <Link to={'/'}>
          Войти
        </Link>
      </div>
    </form>
  )
}