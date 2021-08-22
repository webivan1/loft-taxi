import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
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

const SelectForm = ({ className, label, id, value, onChange, children }) => (
  <FormControl fullWidth className={className}>
    <InputLabel id={id}>{label}</InputLabel>
    <Select
      labelId={id}
      value={value}
      onChange={event => onChange(event.target.value)}
      IconComponent={ExpandMoreIcon}
      data-testid={id}
    >
      {children}
    </Select>
  </FormControl>
)

export const OrderForm = ({ onSubmit }) => {
  const classes = useStyles()

  const [startLocation, setStartLocation] = useState('')
  const [finishLocation, setFinishLocation] = useState('')
  const [option, setOption] = useState('')

  const handleOptionClick = ({ title }) => {
    setOption(title)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      start: startLocation,
      finish: finishLocation,
      option,
    })
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className={classes.fieldWrapper}>
        <SelectForm
          label="Откуда"
          id="from-destination"
          className={classes.select}
          value={startLocation}
          onChange={setStartLocation}
        >
          {startDestinationOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </SelectForm>
        <SelectForm
          label="Куда"
          id="to-destination"
          className={[classes.select, 'no-border'].join(' ')}
          value={finishLocation}
          onChange={setFinishLocation}
        >
          {finishDestinationOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </SelectForm>
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

OrderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

SelectForm.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any
}