import { recordSaga } from '../../../tests/utils/recordSaga'
import { getTokenByCredentialsSaga } from './login.sagas'
import { loginAsync } from './login.actions'
import * as api from './login.api'
import { LOGIN_ERROR, LOGIN_SUCCESS } from './login.constants'
import { ADD_USER } from '../../user/user.constants'

jest.mock('./login.api')

describe('Login saga', () => {
  it('authentication succeeded', async () => {
    jest.spyOn(api, 'loginUserApi').mockImplementationOnce(async () => ({
      success: true,
      token: 'token123'
    }))

    const dispatched = await recordSaga(getTokenByCredentialsSaga, loginAsync({}))

    expect(dispatched).toEqual([
      { type: LOGIN_SUCCESS },
      { type: ADD_USER, payload: 'token123' }
    ])
  })

  it('authentication failed', async () => {
    jest.spyOn(api, 'loginUserApi').mockImplementationOnce(async () => ({
      success: false,
      error: 'error test'
    }))

    const dispatched = await recordSaga(getTokenByCredentialsSaga, loginAsync({}))

    expect(dispatched).toEqual([
      { type: LOGIN_ERROR, payload: 'error test' }
    ])
  })
})

