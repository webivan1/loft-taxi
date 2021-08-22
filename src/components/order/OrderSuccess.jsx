import { makeStyles } from '@material-ui/core/styles'
import { ButtonForm } from '../ui/ButtonForm'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    padding: '41px 39px'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: 0
  },
  text: {
    fontSize: '18px',
    color: '#7B7B7B',
    marginBottom: '20px'
  }
})

export const OrderSuccess = ({ onReset }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Заказ размещен
      </h3>
      <p className={classes.text}>
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </p>
      <ButtonForm fullWidth onClick={onReset}>
        Сделать новый заказ
      </ButtonForm>
    </div>
  )
}

OrderSuccess.propTypes = {
  onReset: PropTypes.func.isRequired
}