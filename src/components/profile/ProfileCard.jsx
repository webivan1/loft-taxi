import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import logo from '../../assets/card/logo.svg'
import scheme from '../../assets/card/scheme.svg'
import type from '../../assets/card/type.svg'

const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
    boxShadow: '0px 5px 20px 2px rgba(0, 0, 0, 0.1)',
    padding: '18px 16px 16px 28px'
  },
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px'
  },
  logo: {
    width: '33px',
    height: '33px'
  },
  date: {
    fontSize: '14px',
    color: 'black'
  },
  cardNumbers: {
    display: 'flex',
    gap: '20px',
    width: 'auto',
    marginBottom: '35px'
  },
  cardNumberItem: {
    width: 'auto',
    fontSize: '21px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
      width: 'auto',
      height: '28px'
    }
  }
})

export const ProfileCard = ({ cardNumber, date }) => {
  const classes = useStyles()
  const cardNumberFiltered = cardNumber.replace(/[^0-9\s]+/g, '')
    .trim().split(' ')

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <img className={classes.logo} src={logo} alt="LoftTaxi" />
        <div className={classes.date}>
          {date}
        </div>
      </div>
      <div className={classes.cardNumbers}>
        {cardNumberFiltered.map((item, index) => (
          <div className={classes.cardNumberItem} key={index + '-' + item}>
            {item}
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <img src={scheme} alt="LoftTaxi" />
        <img src={type} alt="LoftTaxi" />
      </div>
    </Paper>
  )
}

ProfileCard.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}