import { render } from '@testing-library/react'
import { ProfileForm } from './ProfileForm'

describe('ProfileForm', () => {
  it('should render form', () => {
    const fn = jest.fn()
    const setter = jest.fn()
    render(
      <ProfileForm
        onSubmit={fn}
        getters={{
          nameOfCard: 'Test',
          numberOfCard: '1111 2222 3333 4444',
          expireDate: '08/28',
          cvcCode: '111'
        }}
        setters={{
          setNameOfCard: setter,
          setNumberOfCard: setter,
          setExpireDate: setter,
          setCvcCode: setter
        }}
      />
    )
  })
})