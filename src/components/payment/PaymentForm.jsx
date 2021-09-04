import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import { PaymentCard } from './PaymentCard'
import { ButtonForm } from '../ui/ButtonForm'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

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

export const PaymentForm = ({
  onSubmit,
  getters: { nameOfCard, numberOfCard, expireDate, cvcCode },
  setters: { setNameOfCard, setNumberOfCard, setExpireDate, setCvcCode }
}) => {
  const classes = useStyles()
  const { loader, error } = useSelector(({ paymentForm }) => paymentForm)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ nameOfCard, numberOfCard, expireDate, cvcCode })
  }

  return (
    <form noValidate action="#" method="POST" onSubmit={handleSubmit}>
      {error && <Alert className={classes.notify} severity="error">{error}</Alert>}

      <div className={classes.gridWrapper}>
        <div className={classes.formColumn}>
          <TextField
            fullWidth
            label="Имя владельца"
            value={nameOfCard}
            onChange={event => setNameOfCard(event.target.value)}
            className={classes.field}
          />
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar=" "
            value={numberOfCard}
            onChange={event => setNumberOfCard(event.target.value)}
          >
            {props => <TextField
              fullWidth
              label="Номер карты"
              className={classes.field}
              {...props}
            />}
          </InputMask>
          <div className={classes.fieldsGroup}>
            <InputMask
              mask="99/99"
              maskChar=" "
              value={expireDate}
              onChange={event => setExpireDate(event.target.value)}
            >
              {props => <TextField
                fullWidth
                label="MM/YY"
                className={classes.field}
                {...props}
              />}
            </InputMask>
            <InputMask
              mask="999"
              maskChar=" "
              value={cvcCode}
              onChange={event => setCvcCode(event.target.value)}
            >
              {props => <TextField
                fullWidth
                label="CVC"
                className={classes.field}
                {...props}
              />}
            </InputMask>
          </div>
        </div>
        <div className={classes.cardColumn}>
          <PaymentCard cardNumber={numberOfCard} date={expireDate}/>
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
  onSubmit: PropTypes.func.isRequired,
  getters: PropTypes.shape({
    nameOfCard: PropTypes.string,
    numberOfCard: PropTypes.string,
    expireDate: PropTypes.string,
    cvcCode: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired,
  setters: PropTypes.shape({
    setNameOfCard: PropTypes.func.isRequired,
    setNumberOfCard: PropTypes.func.isRequired,
    setExpireDate: PropTypes.func.isRequired,
    setCvcCode: PropTypes.func.isRequired
  }).isRequired
}