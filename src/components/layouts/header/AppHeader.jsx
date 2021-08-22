import { AppBar, Toolbar } from '@material-ui/core'
import { ReactComponent as Logo } from '../../../assets/app-logo.svg'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { AuthContext } from '../../../AuthContext'
import { RouterContext } from '../../../RouterContext'

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

  const {logout} = useContext(AuthContext)
  const {navigateTo, currentRoute} = useContext(RouterContext)

  const getActiveClass = (route) => {
    return route === currentRoute ? 'active' : ''
  }

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Logo className={classes.logo}/>

          <nav className={classes.nav}>
            <a
              href="#/map"
              className={getActiveClass('/map')}
              onClick={() => navigateTo('/map')}
              color="inherit"
            >Карта</a>
            <a
              href="#/profile"
              className={getActiveClass('/profile')}
              onClick={() => navigateTo('/profile')}
              color="inherit"
            >Профиль</a>
            <a href="#/logout" onClick={logout} color="inherit">Выйти</a>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  )
}