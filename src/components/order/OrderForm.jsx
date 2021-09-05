import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { options } from './data'
import { Option } from './Option'
import { ButtonForm } from '../ui/ButtonForm'
import { Alert, Autocomplete } from '@material-ui/lab'
import { useOrderForm } from './useOrderForm'

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
  },
  notify: {
    marginBottom: '15px'
  }
})

const SelectForm = ({ className, label, id, value, onChange, options, loading = false }) => (
  <Autocomplete
    id={id}
    loading={loading}
    className={className}
    fullWidth
    options={options}
    getOptionDisabled={({ disabled }) => disabled}
    getOptionLabel={({ name }) => name}
    getOptionSelected={({ name }) => value === name}
    onChange={(event, value) => onChange(value?.name)}
    renderInput={(params) =>
      <TextField
        {...params}
        label={label}
      />
    }
  />
)

export const OrderForm = ({ onSubmit }) => {
  const classes = useStyles()
  const {
    optionLoader,
    formLoader,
    startDestinationOptions,
    finishDestinationOptions,
    startLocation,
    finishLocation,
    option,
    error,
    formRequestError,
    handleSubmit,
    handleSetStartLocation,
    handleSetFinishLocation,
    handleOptionClick
  } = useOrderForm(onSubmit)

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className={classes.fieldWrapper}>
        <SelectForm
          label="Откуда"
          id="from-destination"
          className={classes.select}
          value={startLocation}
          options={startDestinationOptions}
          loading={optionLoader}
          onChange={handleSetStartLocation}
        />
        <SelectForm
          label="Куда"
          id="to-destination"
          className={[classes.select, 'no-border'].join(' ')}
          value={finishLocation}
          options={finishDestinationOptions}
          loading={optionLoader}
          onChange={handleSetFinishLocation}
        />
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

        {(error || formRequestError) &&
          <Alert className={classes.notify} severity="error">
            {error ?? formRequestError}
          </Alert>
        }

        <ButtonForm disabled={formLoader} fullWidth type="submit">
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