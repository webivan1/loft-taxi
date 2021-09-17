import { routeReducer } from './route.reducer'
import { createStore, applyMiddleware } from 'redux'
import { setStartRoute, setFinishRoute, error, success, routesReset, fetchRoutesAsync } from './route.actions'
import * as api from './route.api'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../root.sagas'

describe('Route reducer', () => {
  let store;
  const fakeCoordinates = [
    [31.223232, 26.232323],
    [-31.223232, 10.232323],
    [54.223232, 72.232323],
  ]

  beforeEach(() => {
    const saga = createSagaMiddleware()
    store = createStore(routeReducer, applyMiddleware(saga))
    saga.run(rootSaga)
  })

  it('action - setStartRoute', () => {
    expect(store.getState().address.start).toBeNull()
    const address = '123 Test Rd'
    store.dispatch(setStartRoute(address))
    expect(store.getState().address.start).toBe(address)
  })

  it('action - setFinishRoute', () => {
    expect(store.getState().address.finish).toBeNull()
    const address = '11 Main Rd'
    store.dispatch(setFinishRoute(address))
    expect(store.getState().address.finish).toBe(address)
  })

  it('action - error', () => {
    expect(store.getState().error).toBeNull()
    const message = 'Test error message'
    store.dispatch(error(message))
    expect(store.getState().error).toBe(message)
  })

  it('action - success', () => {
    expect(store.getState().map).toBeNull()
    store.dispatch(success(fakeCoordinates))
    expect(store.getState().map).toEqual(fakeCoordinates)
  })

  it('action - routesReset', () => {
    store.dispatch(success(fakeCoordinates))
    expect(store.getState().map).toEqual(fakeCoordinates)
    store.dispatch(routesReset())
    expect(store.getState().map).toBeNull()
  })

  it('action success - fetchRoutesAsync', async () => {
    jest.spyOn(api, 'buildRouteApi').mockImplementationOnce(async () => fakeCoordinates)
    await store.dispatch(fetchRoutesAsync({}))
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().map).toEqual(fakeCoordinates)
  })

  it('action error - fetchAddresses', async () => {
    jest.spyOn(api, 'buildRouteApi').mockImplementationOnce(async () => [])
    await store.dispatch(fetchRoutesAsync())
    expect(store.getState().loader).toBeFalsy()
    expect(store.getState().map).toBeNull()
    expect(store.getState().error).toBe('Маршрут не найден')
  })
})