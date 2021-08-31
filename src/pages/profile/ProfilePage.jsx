import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { PaymentSuccess } from '../../components/payment/PaymentSuccess'
import { PaymentFormWrapper } from '../../components/payment/PaymentFormWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { resetForm, updatePaymentAsync } from '../../store/payment/form/payment-form.actions'

const useStyles = makeStyles({
  background: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '15px',
    background: 'linear-gradient(0deg, rgba(28, 26, 25, 0.5), rgba(28, 26, 25, 0.5))'
  },
  modal: {
    width: '100%',
    maxWidth: '888px',
    boxSizing: 'border-box',
    padding: '55px 44px 67px 44px',
    borderRadius: '10px',
    boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
    margin: 'auto'
  }
})

export const ProfilePage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { success } = useSelector(({ paymentForm }) => paymentForm)

  const handleUpdatedPayment = (form) => {
    dispatch(updatePaymentAsync(form))
  }

  useEffect(() => {
    success && dispatch(resetForm())
  }, [dispatch])

  return (
    <div className={classes.background}>
      <Paper className={classes.modal}>
        {!success ? (
          <PaymentFormWrapper onSubmit={handleUpdatedPayment} />
        ) : (
          <PaymentSuccess />
        )}
      </Paper>
    </div>
  )
}