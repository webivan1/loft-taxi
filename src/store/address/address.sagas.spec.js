import { recordSaga } from '../../tests/utils/recordSaga'
import { fetchAddressListSaga } from './address.sagas'
import { fetchAddresses } from './address.actions'
import * as api from './address.api'
import { ADDRESS_LIST_SUCCESS, ADDRESS_LIST_ERROR } from './address.constants'

jest.mock('./address.api')

describe('Address saga', () => {
  it('should get a list of addresses', async () => {
    const fakeAddresses = ['test', 'test 1', 'test 2']

    jest.spyOn(api, 'addressListApi').mockImplementationOnce(async () => ({
      addresses: fakeAddresses
    }))

    const dispatched = await recordSaga(fetchAddressListSaga, fetchAddresses())

    expect(dispatched).toEqual([
      { type: ADDRESS_LIST_SUCCESS, payload: fakeAddresses }
    ])
  })

  it('should return an empty address list', async () => {
    jest.spyOn(api, 'addressListApi').mockImplementationOnce(async () => ({
      success: false,
      error: 'test error'
    }))

    const dispatched = await recordSaga(fetchAddressListSaga, fetchAddresses())

    expect(dispatched).toEqual([
      { type: ADDRESS_LIST_ERROR, payload: 'test error' }
    ])
  })
})

