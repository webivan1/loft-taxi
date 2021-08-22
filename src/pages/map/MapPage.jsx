import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { OrderForm } from '../../components/order/OrderForm'
import { useState } from 'react'
import { OrderSuccess } from '../../components/order/OrderSuccess'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '486px',
    boxSizing: 'border-box',
    boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    position: 'relative',
    zIndex: 2
  },
})

export const MapPage = () => {
  const classes = useStyles()
  const [isSubmitted, setSubmit] = useState(false)

  const handleSubmittedForm = (form) => {
    setSubmit(true)
    console.log(form)
  }

  const handleResetSubmit = () => {
    setSubmit(false)
  }

  return (
    <Paper className={classes.root}>
      {isSubmitted ? (
        <OrderSuccess onReset={handleResetSubmit} />
      ) : (
        <OrderForm onSubmit={handleSubmittedForm} />
      )}
    </Paper>
  )
}