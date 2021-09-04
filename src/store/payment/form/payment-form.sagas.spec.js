import { recordSaga } from '../../../tests/utils/recordSaga'
import { updatePaymentSaga } from './payment-form.sagas'
import { updatePaymentAsync } from './payment-form.actions'
import { PAYMENT_FORM_ERROR, PAYMENT_FORM_SUCCESS } from './payment-form.constants'
import * as api from './payment-form.api'
import { PAYMENT_DETAIL_SUCCESS } from '../detail/payment-detail.constants'

jest.mock('./payment-form.api')

describe('Payment form saga', () => {
  const postData = {
    card: '1111 1111 1111 1111',
    cvc: '111',
    name: 'Test'
  }

  it('should call success action', async () => {
    jest.spyOn(api, 'updatePaymentApi').mockImplementationOnce(async () => ({
      success: true
    }))

    const dispatched = await recordSaga(updatePaymentSaga, updatePaymentAsync(postData))

    expect(dispatched).toEqual([
      { type: PAYMENT_FORM_SUCCESS },
      { type: PAYMENT_DETAIL_SUCCESS, payload: postData }
    ])
  })

  it('should call error action', async () => {
    jest.spyOn(api, 'updatePaymentApi').mockImplementationOnce(async () => ({
      success: false,
      error: 'error test'
    }))

    const dispatched = await recordSaga(updatePaymentSaga, updatePaymentAsync({}))

    expect(dispatched).toEqual([
      { type: PAYMENT_FORM_ERROR, payload: 'error test' }
    ])
  })
})

