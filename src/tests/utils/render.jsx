import { render } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { rootSaga } from '../../store/root.sagas'
import createSagaMiddleware from 'redux-saga'
import { reducers } from '../../store'
import theme from '../../theme'

const sagaMiddleware = createSagaMiddleware()

export const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      combineReducers(reducers),
      initialState,
      applyMiddleware(sagaMiddleware)
    )
  } = {}
) => {
  sagaMiddleware.run(rootSaga)

  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            {component}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    ),
    store,
  }
}