import { AppBar, Toolbar } from '@material-ui/core'
import { ReactComponent as Logo } from '../../../assets/app-logo.svg'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { UserContext } from '../../../userContext'

const useStyles = makeStyles(theme => ({
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
}))

export const AppHeader = ({ menu }) => {
  const classes = useStyles()
  const { handleLogOut } = useContext(UserContext)

  return (
    <header>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Logo className={classes.logo} />

          <nav className={classes.nav}>
            <a href="#" color="inherit">Карта</a>
            <a href="#" color="inherit">Профиль</a>
            <a href="#" onClick={handleLogOut} color="inherit">Выйти</a>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  )
}