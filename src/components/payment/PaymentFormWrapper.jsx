import { useEffect } from 'react'
import { PaymentForm } from './PaymentForm'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import { CircularProgress } from '@material-ui/core'
import { usePaymentDetail } from './usePaymentDetail'
import { useDispatch } from 'react-redux'
import { resetForm } from '../../store/payment/form/payment-form.actions'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 0
  },
  text: {
    fontSize: '18px',
    color: '#7B7B7B',
    marginTop: 0,
    marginBottom: '51px'
  },
  notify: {
    marginBottom: '15px'
  }
})

export const PaymentFormWrapper = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { loader, error, detail, fetchDetail } = usePaymentDetail()

  useEffect(() => {
    dispatch(resetForm())
    !loader && fetchDetail();
  }, [dispatch])

  return (
    <>
      <div className={classes.root}>
        <h3 className={classes.heading}>
          Профиль
        </h3>
        <p className={classes.text}>
          Введите платежные данные
        </p>
      </div>

      {error && <Alert className={classes.notify} severity="error">{error}</Alert>}

      {loader ? (
        <CircularProgress />
      ) : (
        <PaymentForm initialValues={detail ?? {
          cardName: '',
          cardNumber: '',
          expiryDate: '',
          cvc: ''
        }} />
      )}
    </>
  )
}