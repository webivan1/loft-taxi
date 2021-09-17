import { makeStyles } from '@material-ui/core/styles'
import { ButtonForm } from '../ui/ButtonForm'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    padding: '41px 39px'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: 0,
    lineHeight: '40px'
  },
  text: {
    fontSize: '18px',
    color: '#7B7B7B',
    marginBottom: '20px'
  }
})

export const OrderCanceled = () => {
  const classes = useStyles()
  const history = useHistory()

  const navigateToProfile = () => {
    history.push('/profile')
  }

  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Вы ещё не настроили свой профиль
      </h3>
      <p className={classes.text}>
        Вы сможете заказыать такси после привязки платежной карты в личном профиле.
        Нажмите на желтую кнопку ниже
      </p>
      <ButtonForm fullWidth onClick={navigateToProfile}>
        Перейти в профиль
      </ButtonForm>
    </div>
  )
}