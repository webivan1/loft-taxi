import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { startDestinationOptions, finishDestinationOptions, options } from './data'
import { Option } from './Option'
import { ButtonForm } from '../ui/ButtonForm'

const useStyles = makeStyles({
  fieldWrapper: {
    padding: '0 22px',
    borderBottom: '1px solid #E0E0E0',
    marginBottom: '23px'
  },
  select: {
    '& > .MuiInputLabel-shrink': {
      display: 'none'
    },
    '& > .MuiInput-formControl': {
      '&::before': {
        borderBottom: '1px solid #E0E0E0'
      }
    },
    '&.no-border': {
      '& > .MuiInput-formControl': {
        '&::before': {
          borderBottom: 'none'
        }
      }
    }
  },
  wrapOptions: {
    boxShadow: '0px 0px 20px -5px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    padding: '32px 46px'
  },
  options: {
    display: 'flex',
    justifyItems: 'between',
    gap: '20px'
  }
})

export const OrderForm = () => {
  const classes = useStyles()

  const [startLocation, setStartLocation] = useState('')
  const [finishLocation, setFinishLocation] = useState('')
  const [option, setOption] = useState('')

  const handleOptionClick = ({ title }) => {
    setOption(title)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form: ', {
      start: startLocation,
      finish: finishLocation,
      option,
    })
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className={classes.fieldWrapper}>
        <FormControl hiddenLabel fullWidth className={classes.select}>
          <InputLabel id="from-destination">
            Откуда
          </InputLabel>
          <Select
            labelId="from-destination"
            value={startLocation}
            onChange={event => setStartLocation(event.target.value)}
            IconComponent={ExpandMoreIcon}
          >
            {startDestinationOptions.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth className={[classes.select, 'no-border'].join(' ')}>
          <InputLabel id="from-destination">
            Куда
          </InputLabel>
          <Select
            labelId="from-destination"
            value={finishLocation}
            onChange={event => setFinishLocation(event.target.value)}
            IconComponent={ExpandMoreIcon}
          >
            {finishDestinationOptions.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.wrapOptions}>
        <div className={classes.options}>
          {options.map(item => (
            <Option
              key={item.title}
              active={item.title === option}
              onClick={handleOptionClick}
              {...item}
            />
          ))}
        </div>
        <ButtonForm fullWidth type="submit">
          Заказать
        </ButtonForm>
      </div>
    </form>
  )
}