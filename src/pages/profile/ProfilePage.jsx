import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { ProfileSuccess } from '../../components/profile/ProfileSuccess'
import { ProfileFormWrapper } from '../../components/profile/ProfileFormWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { resetForm, updateProfileAsync } from '../../store/profile/form/profile-form.actions'

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
  const { success } = useSelector(({ profileForm }) => profileForm)

  const handleUpdatedProfile = (form) => {
    dispatch(updateProfileAsync(form))
  }

  useEffect(() => {
    success && dispatch(resetForm())
  }, [dispatch])

  return (
    <div className={classes.background}>
      <Paper className={classes.modal}>
        {!success ? (
          <ProfileFormWrapper onSubmit={handleUpdatedProfile} />
        ) : (
          <ProfileSuccess />
        )}
      </Paper>
    </div>
  )
}