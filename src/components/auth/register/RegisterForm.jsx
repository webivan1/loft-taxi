import { ButtonForm } from '../../ui/ButtonForm'
import { Grid, TextField } from '@material-ui/core'
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
});

export const RegisterForm = () => {
  const {
    email,
    name,
    password,
    handleSubmit,
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    handleChangePage
  } = useRegisterForm()

  const classes = useStyles()

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Email*"
            placeholder="mail@mail.ru"
            autoComplete="off"
            value={email}
            onChange={handleChangeEmail}
            margin="none"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            label="Как вас зовут?*"
            placeholder="Петр Александрович"
            value={name}
            autoComplete="off"
            onChange={handleChangeName}
            margin="none"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.fieldWrapper}>
          <TextField
            type="password"
            label="Придумайте пароль*"
            autoComplete="off"
            placeholder="******"
            value={password}
            onChange={handleChangePassword}
            margin="none"
            fullWidth
          />
        </Grid>
      </Grid>
      <ButtonForm fullWidth type="submit">
        Зарегистрироваться
      </ButtonForm>

      <div className={classes.register}>
        Уже зарегестрированны?{' '}
        <a href="#" onClick={() => handleChangePage('/login')}>
          Войти
        </a>
      </div>
    </form>
  )
}