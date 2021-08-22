import { ButtonForm } from '../ui/ButtonForm'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

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
    marginBottom: '25px'
  }
})

export const ProfileSuccess = ({ onReset }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Профиль
      </h3>
      <p className={classes.text}>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </p>
      <ButtonForm onClick={onReset}>
        Перейти на карту
      </ButtonForm>
    </div>
  )
}

ProfileSuccess.propTypes = {
  onReset: PropTypes.func.isRequired
}