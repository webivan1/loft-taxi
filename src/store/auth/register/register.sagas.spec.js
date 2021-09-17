import { recordSaga } from '../../../tests/utils/recordSaga'
import { addUserByCredentialsSaga } from './register.sagas'
import { addUserAsync } from './register.actions'
import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_ADD_USER } from './register.constants'
import * as api from './register.api'

jest.mock('./register.api')

describe('Register saga', () => {
  it('registration succeeded', async () => {
    jest.spyOn(api, 'registerUserApi').mockImplementationOnce(async () => ({
      success: true
    }))

    const dispatched = await recordSaga(addUserByCredentialsSaga, addUserAsync({}))

    expect(dispatched).toEqual([
      { type: REGISTER_SUCCESS, payload: 'You have created account successfully' }
    ])
  })

  it('registration failed', async () => {
    jest.spyOn(api, 'registerUserApi').mockImplementationOnce(async () => ({
      success: false,
      error: 'error test'
    }))

    const dispatched = await recordSaga(addUserByCredentialsSaga, addUserAsync({}))

    expect(dispatched).toEqual([
      { type: REGISTER_ERROR, payload: 'error test' }
    ])
  })
})

