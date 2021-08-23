import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoWrapper: {
    width: '34%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background-dark-color)',
    paddingTop: '25px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  content: {
    width: '66%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(/bg-auth.jpg)`,
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flex: 1,
      height: 'auto',
    },
  },
  logo: {
    width: '196px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '34%',
    },
  },
}))

export const AuthLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <div className={classes.logoWrapper}>
        <Logo className={classes.logo}/>
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </main>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any.isRequired
}