import { useDispatch, useSelector } from 'react-redux'
import { getFinishRoute, getFinishRoutes, getStartRoute, getStartRoutes } from '../../store/route/route.selectors'
import { setFinishRoute, setStartRoute } from '../../store/route/route.actions'

export const useOrderForm = () => {
  const dispatch = useDispatch()
  const optionLoader = useSelector(({ address }) => address.loader)
  const { loader: formLoader, error: formRequestError } = useSelector(({ route }) => route)
  const startDestinationOptions = useSelector(getStartRoutes)
  const finishDestinationOptions = useSelector(getFinishRoutes)
  const startLocation = useSelector(getStartRoute)
  const finishLocation = useSelector(getFinishRoute)

  const handleSetStartLocation = (value) => {
    dispatch(setStartRoute(value))
  }

  const handleSetFinishLocation = (value) => {
    dispatch(setFinishRoute(value))
  }

  return {
    initialValues: {
      start: startLocation ?? '',
      finish: finishLocation ?? '',
      option: ''
    },
    optionLoader,
    formLoader,
    startDestinationOptions,
    finishDestinationOptions,
    formRequestError,
    handleSetStartLocation,
    handleSetFinishLocation
  }
}