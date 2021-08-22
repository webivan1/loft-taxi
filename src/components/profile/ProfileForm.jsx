import { TextField } from '@material-ui/core'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import { ProfileCard } from './ProfileCard'
import { ButtonForm } from '../ui/ButtonForm'

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
  }
}))

export const ProfileForm = ({
  onSubmit,
  getters: {nameOfCard, numberOfCard, expireDate, cvcCode},
  setters: {setNameOfCard, setNumberOfCard, setExpireDate, setCvcCode}
}) => {
  const classes = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({nameOfCard, numberOfCard, expireDate, cvcCode})
  }

  return (
    <form noValidate action="#" method="POST" onSubmit={handleSubmit}>
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
              disableUnderline
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
                disableUnderline
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
                disableUnderline
                {...props}
              />}
            </InputMask>
          </div>
        </div>
        <div className={classes.cardColumn}>
          <ProfileCard cardNumber={numberOfCard} date={expireDate}/>
        </div>
      </div>
      <div className={classes.btn}>
        <ButtonForm type="submit">
          Сохранить
        </ButtonForm>
      </div>
    </form>
  )
}