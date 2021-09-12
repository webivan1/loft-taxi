import { useDispatch, useSelector } from 'react-redux'
import { getFinishRoute, getFinishRoutes, getStartRoute, getStartRoutes } from '../../store/route/route.selectors'
import { useState } from 'react'
import { setFinishRoute, setStartRoute } from '../../store/route/route.actions'
import * as yup from 'yup'

const validationScheme = yup.object({
  start: yup.string('Choose start location')
    .required('Start location is required'),
  finish: yup.string('Choose finish location')
    .required('Finish location is required'),
  option: yup.string('Choose tariff')
    .required('Tariff is required'),
})

export const useOrderForm = (onSubmit) => {
  const dispatch = useDispatch()
  const optionLoader = useSelector(({ address }) => address.loader)
  const { loader: formLoader, error: formRequestError } = useSelector(({ route }) => route)
  const startDestinationOptions = useSelector(getStartRoutes)
  const finishDestinationOptions = useSelector(getFinishRoutes)
  const startLocation = useSelector(getStartRoute)
  const finishLocation = useSelector(getFinishRoute)
  const [option, setOption] = useState('')
  const [error, setErrorMessage] = useState(null)

  const handleSetStartLocation = (value) => {
    dispatch(setStartRoute(value))
  }

  const handleSetFinishLocation = (value) => {
    dispatch(setFinishRoute(value))
  }

  const handleOptionClick = ({ title }) => {
    setOption(title)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = {
      start: startLocation ?? '',
      finish: finishLocation ?? '',
      option,
    }

    const errors = await validateForm(form)

    if (errors) {
      setErrorMessage(errors)
    } else {
      setErrorMessage(null)
      onSubmit(form)
    }
  }

  return {
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
  }
}

async function validateForm(form) {
  try {
    await validationScheme.validate(form)
    return null
  } catch (e) {
    return e.errors[0]
  }
}