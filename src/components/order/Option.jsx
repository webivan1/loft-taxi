import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '12px',
    marginBottom: '30px',
    '&:not(.active)': {
      opacity: 0.5,
      cursor: 'pointer',
    }
  },
  title: {
    fontSize: '16px',
    color: 'black',
    marginBottom: '5px'
  },
  cost: {
    fontSize: '11px',
    color: '#828282',
    marginBottom: 0,
  },
  price: {
    fontSize: '24px',
    lineHeight: '26px',
    marginBottom: '10px',
  },
  image: {
    textAlign: 'center',
    '& > img': {
      width: '100%',
      height: 'auto',
      maxWidth: '95px'
    }
  }
})

export const Option = ({ title, price, imageUrl, active = false, onClick }) => {
  const classes = useStyles()

  const handleClick = () => {
    onClick({ title })
  }

  return (
    <Paper onClick={handleClick} className={[classes.root, active ? 'active' : ''].join(' ')}>
      <div className={classes.title}>
        {title}
      </div>
      <div>
        <div className={classes.cost}>Стоимость</div>
        <div className={classes.price}>
          {price} ₽
        </div>
      </div>
      <div className={classes.image}>
        <img src={imageUrl} alt={title} />
      </div>
    </Paper>
  )
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
}