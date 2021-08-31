import { AppBar, Toolbar } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/app-logo.svg'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/user/user.actions'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    zIndex: 5
  },
  header: {
    height: '102px',
    background: '#1C1A19'
  },
  logo: {
    marginRight: 'auto',
    width: '269px',
    height: 'auto'
  },
  nav: {
    display: 'inline-flex',
    gap: '40px',
    '& a': {
      fontSize: '21px',
      color: 'white',
      textDecoration: 'none',
      '&.active, &:hover': {
        color: 'var(--btn-bg)'
      }
    }
  }
})

export const AppHeader = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useHistory()

  const handleLogout = event => {
    event.preventDefault()
    dispatch(logout())
    router.push('/')
  }

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Logo className={classes.logo}/>

          <nav className={classes.nav}>
            <Link to="/">
              Карта
            </Link>
            <Link to="/profile">
              Профиль
            </Link>
            <a href="#/logout" onClick={handleLogout} color="inherit">
              Выйти
            </a>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  )
}