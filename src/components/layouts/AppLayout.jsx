import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { AppHeader } from './header/AppHeader'
import { AppMobileHeader } from './header/AppMobileHeader'
import { MapLayer } from '../map/MapLayer'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '59px',
    backgroundImage: 'url(/bg-auth.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      padding: '15px',
    },
  }
}))

export const AppLayout = ({ children }) => {
  const classes = useStyles()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <>
      {!mobile && <AppHeader/>}
      <main className={classes.root}>
        {mobile && <AppMobileHeader/>}

        <MapLayer/>

        {children}
      </main>
    </>
  )
}