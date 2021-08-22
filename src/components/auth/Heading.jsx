import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    fontSize: '30px',
    color: '#000',
    fontWeight: 700,
    lineHeight: '35.16px'
  }
});

export const Heading = ({ children, className = '' }) => {
  const classes = useStyles()

  return (
    <div className={[classes.root, className ?? ''].join(' ')}>
      {children}
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}