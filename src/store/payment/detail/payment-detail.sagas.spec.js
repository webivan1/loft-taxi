import { recordSaga } from '../../../tests/utils/recordSaga'
import { fetchPaymentDetailSaga } from './payment-detail.sagas'
import { fetchPaymentDetailAsync } from './payment-detail.actions'
import { PAYMENT_DETAIL_SUCCESS, PAYMENT_DETAIL_ERROR } from './payment-detail.constants'
import * as api from './payment-detail.api'

jest.mock('./payment-detail.api')

describe('Payment detail saga', () => {
  it('should get a success actions', async () => {
    const payload = {
      name: 'Test',
      card: '1111 1111 1111 1111'
    }

    jest.spyOn(api, 'fetchPaymentDetailApi').mockImplementationOnce(async () => payload)

    const dispatched = await recordSaga(fetchPaymentDetailSaga, fetchPaymentDetailAsync())

    expect(dispatched).toEqual([
      { type: PAYMENT_DETAIL_SUCCESS, payload }
    ])
  })

  it('should call error action', async () => {
    jest.spyOn(api, 'fetchPaymentDetailApi').mockImplementationOnce(async () => ({
      success: false,
      error: 'error'
    }))

    const dispatched = await recordSaga(fetchPaymentDetailSaga, fetchPaymentDetailAsync())

    expect(dispatched).toEqual([
      { type: PAYMENT_DETAIL_ERROR, payload: 'error' }
    ])
  })
})

