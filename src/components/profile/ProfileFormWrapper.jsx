import { useState } from 'react'
import { ProfileForm } from './ProfileForm'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

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
  }
})

export const ProfileFormWrapper = ({ onSubmit }) => {
  const classes = useStyles()
  const [nameOfCard, setNameOfCard] = useState('')
  const [numberOfCard, setNumberOfCard] = useState('')
  const [expireDate, setExpireDate] = useState('')
  const [cvcCode, setCvcCode] = useState('')

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

      <ProfileForm
        onSubmit={onSubmit}
        setters={{
          setNameOfCard,
          setNumberOfCard,
          setExpireDate,
          setCvcCode
        }}
        getters={{
          nameOfCard,
          numberOfCard,
          expireDate,
          cvcCode
        }}
      />
    </>
  )
}

ProfileFormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired
}