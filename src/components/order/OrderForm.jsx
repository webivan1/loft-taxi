import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { options } from './data'
import { Option } from './Option'
import { ButtonForm } from '../ui/ButtonForm'
import { Alert, Autocomplete } from '@material-ui/lab'
import { useOrderForm } from './useOrderForm'
import { useFormik } from 'formik'
import * as yup from 'yup'

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

const validationSchema = yup.object({
  start: yup.string('Choose start location')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Start location is required'),
  finish: yup.string('Choose finish location')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Finish location is required'),
  option: yup.string('Choose tariff')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Tariff is required'),
})

export const OrderForm = ({ onSubmit }) => {
  const classes = useStyles()
  const {
    initialValues,
    optionLoader,
    formLoader,
    startDestinationOptions,
    finishDestinationOptions,
    formRequestError,
    handleSetStartLocation,
    handleSetFinishLocation
  } = useOrderForm(onSubmit)

  const { setFieldValue, values, errors, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      onSubmit(values)
    },
  })

  return (
    <form action="#" noValidate method="POST" onSubmit={handleSubmit}>
      <div className={classes.fieldWrapper}>
        <Autocomplete
          data-testid="from-destination"
          loading={optionLoader}
          className={classes.select}
          options={startDestinationOptions}
          getOptionDisabled={({ disabled }) => disabled}
          getOptionLabel={({ name }) => name}
          getOptionSelected={({ name }) => values.start === name}
          onChange={(event, value) => {
            setFieldValue('start', value?.name ?? '')
            handleSetStartLocation(value?.name ?? '')
          }}
          renderInput={(params) =>
            <TextField
              {...params}
              fullWidth
              label="Откуда"
              value={values.start}
              error={touched.start && Boolean(errors.start)}
              helperText={touched.start && errors.start}
            />
          }
        />
        <Autocomplete
          data-testid="to-destination"
          loading={optionLoader}
          className={classes.select}
          options={finishDestinationOptions}
          getOptionDisabled={({ disabled }) => disabled}
          getOptionLabel={({ name }) => name}
          getOptionSelected={({ name }) => values.finish === name}
          onChange={(event, value) => {
            setFieldValue('finish', value?.name ?? '')
            handleSetFinishLocation(value?.name ?? '')
          }}
          renderInput={(params) =>
            <TextField
              {...params}
              fullWidth
              label="Куда"
              value={values.finish}
              error={touched.finish && Boolean(errors.finish)}
              helperText={touched.finish && errors.finish}
            />
          }
        />
      </div>
      <div className={classes.wrapOptions}>
        <div className={classes.options}>
          {options.map(item => (
            <Option
              key={item.title}
              active={item.title === values.option}
              onClick={({ title }) => setFieldValue('option', title)}
              {...item}
            />
          ))}
        </div>

        {Boolean(errors.option) &&
          <Alert className={classes.notify} severity="error">
            {errors.option}
          </Alert>
        }

        {formRequestError &&
          <Alert className={classes.notify} severity="error">
            {formRequestError}
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