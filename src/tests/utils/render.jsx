import { render } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { actionAsyncMiddleware } from '../../store/middleware/actionAsyncMiddleware'
import { reducers } from '../../store'
import theme from '../../theme'

export const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers(reducers),
      initialState,
      applyMiddleware(actionAsyncMiddleware)
    )
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {component}
        </ThemeProvider>
      </Provider>
    ),
    store,
  }
}