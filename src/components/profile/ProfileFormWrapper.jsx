import { useEffect, useState } from 'react'
import { ProfileForm } from './ProfileForm'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { CircularProgress } from '@material-ui/core'
import { fetchProfileDetailAsync } from '../../store/profile/detail/profile-detail.actions'

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

export const ProfileFormWrapper = ({ onSubmit }) => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { loader, error, detail } = useSelector(({ profileDetail }) => profileDetail)

  const [nameOfCard, setNameOfCard] = useState('')
  const [numberOfCard, setNumberOfCard] = useState('')
  const [expireDate, setExpireDate] = useState('')
  const [cvcCode, setCvcCode] = useState('')

  useEffect(() => {
    dispatch(fetchProfileDetailAsync())
  }, [dispatch])

  useEffect(() => {
    if (detail) {
      setNameOfCard(detail.cardName ?? '')
      setNumberOfCard(detail.cardNumber ?? '')
      setExpireDate(detail.expiryDate ?? '')
      setCvcCode(detail.cvc ?? '')
    }
  }, [detail])

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

      {/*{error && <Alert className={classes.notify} severity="error">{error}</Alert>}*/}

      {loader ? (
        <CircularProgress />
      ) : (
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
      )}
    </>
  )
}

ProfileFormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired
}