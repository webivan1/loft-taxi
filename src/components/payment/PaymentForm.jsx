import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import { PaymentCard } from './PaymentCard'
import { ButtonForm } from '../ui/ButtonForm'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { updatePaymentAsync } from '../../store/payment/form/payment-form.actions'

const validationSchema = yup.object({
  cardName: yup.string('Enter card holder\'s name')
    .required('Name is required'),
  cardNumber: yup.string('Enter card number')
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Incorrect number card XXXX XXXX XXXX XXXX')
    .required('Card number is required'),
  expiryDate: yup.string('Enter expire date')
    .matches(/^\d{2}\/\d{2}$/, 'Incorrect expire date MM/YY')
    .required('Expire date is required'),
  cvc: yup.string('Enter CVC code')
    .matches(/^\d{3}$/, 'Incorrect CVC code')
    .required('CVC is required'),
})

const useStyles = makeStyles(theme => ({
  gridWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  formColumn: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '347px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '25px'
    }
  },
  cardColumn: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '347px'
    }
  },
  fieldsGroup: {
    display: 'flex',
    gap: '35px'
  },
  btn: {
    marginTop: '20px'
  },
  field: {
    marginBottom: '26px',
    '& > label': {
      fontSize: '16px',
      color: '#828282',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(0, -3px)'
      }
    },
    '& > .MuiInput-root': {
      '&::before': {
        borderBottom: '2px solid #E4E4E4'
      }
    }
  },
  notify: {
    marginBottom: '15px'
  }
}))

export const PaymentForm = ({ initialValues }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { loader, error } = useSelector(({ paymentForm }) => paymentForm)

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: values => {
      !loader && dispatch(updatePaymentAsync(values))
    }
  })

  return (
    <form noValidate action="#" method="POST" onSubmit={form.handleSubmit}>
      {error && <Alert className={classes.notify} severity="error">{error}</Alert>}

      <div className={classes.gridWrapper}>
        <div className={classes.formColumn}>
          <TextField
            fullWidth
            label="Имя владельца"
            name="cardName"
            className={classes.field}
            value={form.values.cardName}
            onChange={form.handleChange}
            error={form.touched.cardName && Boolean(form.errors.cardName)}
            helperText={form.touched.cardName && form.errors.cardName}
          />
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar=" "
            value={form.values.cardNumber}
            onChange={form.handleChange}
          >
            {props => <TextField
              fullWidth
              label="Номер карты"
              name="cardNumber"
              className={classes.field}
              error={form.touched.cardNumber && Boolean(form.errors.cardNumber)}
              helperText={form.touched.cardNumber && form.errors.cardNumber}
              {...props}
            />}
          </InputMask>
          <div className={classes.fieldsGroup}>
            <InputMask
              mask="99/99"
              maskChar=" "
              value={form.values.expiryDate}
              onChange={form.handleChange}
            >
              {props => <TextField
                fullWidth
                label="MM/YY"
                name="expiryDate"
                className={classes.field}
                error={form.touched.expiryDate && Boolean(form.errors.expiryDate)}
                helperText={form.touched.expiryDate && form.errors.expiryDate}
                {...props}
              />}
            </InputMask>
            <InputMask
              mask="999"
              maskChar=" "
              value={form.values.cvc}
              onChange={form.handleChange}
            >
              {props => <TextField
                fullWidth
                label="CVC"
                name="cvc"
                className={classes.field}
                error={form.touched.cvc && Boolean(form.errors.cvc)}
                helperText={form.touched.cvc && form.errors.cvc}
                {...props}
              />}
            </InputMask>
          </div>
        </div>
        <div className={classes.cardColumn}>
          <PaymentCard
            cardNumber={form.values.cardNumber}
            date={form.values.expiryDate}
          />
        </div>
      </div>
      <div className={classes.btn}>
        <ButtonForm disabled={loader} type="submit">
          Сохранить
        </ButtonForm>
      </div>
    </form>
  )
}

PaymentForm.propTypes = {
  initialValues: PropTypes.shape({
    cardName: PropTypes.string,
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.string,
    cvc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

PaymentForm.defaultProps = {
  initialValues: {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  }
}