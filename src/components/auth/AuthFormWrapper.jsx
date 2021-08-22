import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Heading } from './Heading'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: '580px',
    boxSizing: 'border-box',
    justifyContent: 'center',
    padding: '50px 15px',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px'
  },
  heading: {
    marginBottom: '53px'
  },
  form: {
    maxWidth: '353px',
    '& label': {
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#000',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(0, 1.5px)'
      }
    }
  }
});

export const AuthFormWrapper = ({ heading, children }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <div className={classes.form}>
        <Heading className={classes.heading}>{heading}</Heading>
        {children}
      </div>
    </Paper>
  )
}

AuthFormWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.string
}