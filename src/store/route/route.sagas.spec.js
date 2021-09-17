import { recordSaga } from '../../tests/utils/recordSaga'
import { fetchRouteSaga } from './route.sagas'
import { fetchRoutesAsync } from './route.actions'
import * as api from './route.api'
import { ROUTE_DIRECTION_BUILD, ROUTE_DIRECTION_FAIL } from './route.constants'

jest.mock('./route.api')

describe('Address saga', () => {
  it('should get some coordinates', async () => {
    const fakeCoordinates = [
      [31.223232, 26.232323],
      [-31.223232, 10.232323],
      [54.223232, 72.232323],
    ]

    jest.spyOn(api, 'buildRouteApi').mockImplementationOnce(async () => fakeCoordinates)

    const dispatched = await recordSaga(fetchRouteSaga, fetchRoutesAsync({}))

    expect(dispatched).toEqual([
      { type: ROUTE_DIRECTION_BUILD, payload: fakeCoordinates }
    ])
  })

  it('should return an empty response', async () => {
    jest.spyOn(api, 'buildRouteApi').mockImplementationOnce(async () => [])

    const dispatched = await recordSaga(fetchRouteSaga, fetchRoutesAsync({}))

    expect(dispatched).toEqual([
      { type: ROUTE_DIRECTION_FAIL, payload: 'Маршрут не найден' }
    ])
  })
})

