import { useContext } from 'react'
import { RouterContext } from './RouterContext'

export const App = () => {
  const { currentComponent } = useContext(RouterContext)

  return currentComponent
}
