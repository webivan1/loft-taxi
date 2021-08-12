import { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 60px',
    margin: '0 auto',
    borderRadius: '61px',
    height: '61px',
    backgroundColor: 'var(--btn-bg)',
    color: 'var(--btn-color)',
    cursor: 'pointer',
    minWidth: '353px',
    border: 'none',
    fontSize: '25px',
    '&:hover': {
      backgroundColor: 'var(--btn-active-bg)',
      color: 'var(--btn-active-color)',
    },
    '&:disabled': {
      backgroundColor: 'var(--btn-disabled-bg)',
      color: 'var(--btn-disabled-color)',
    },
    '&.full-width': {
      width: '100%',
      minWidth: 'auto'
    }
  }
});

export const ButtonForm = forwardRef(({ children, fullWidth = false, className = '', ...attrs }, ref) => {
  const classes = useStyles()

  return (
    <button
      {...attrs}
      ref={ref}
      className={[
        classes.btn,
        className ?? '',
        fullWidth ? 'full-width' : ''
      ].join(' ')}
    >
      {children}
    </button>
  )
})