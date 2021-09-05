import { useDispatch, useSelector } from 'react-redux'
import { getFinishRoute, getFinishRoutes, getStartRoute, getStartRoutes } from '../../store/route/route.selectors'
import { useState } from 'react'
import { setFinishRoute, setStartRoute } from '../../store/route/route.actions'

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

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = {
      start: startLocation,
      finish: finishLocation,
      option,
    }

    const errors = validateForm(form)

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

function validateForm(form) {
  if (typeof form !== 'object') {
    return 'Не валидные данные формы'
  }

  if (!('start' in form) || !form.start) {
    return 'Выберите Вашу локацию'
  }

  if (!('finish' in form) || !form.finish) {
    return 'Выберите куда отправляетесь'
  }

  if (!('option' in form) || !form.option) {
    return 'Выберите тип траспорта'
  }

  return null
}