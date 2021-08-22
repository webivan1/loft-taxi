import { render, fireEvent } from '@testing-library/react'
import { Option } from './Option'

describe('Option', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Option price={300} imageUrl="#" title="Title test" />)
    expect(getByTestId('option-title').textContent).toMatch('Title test')
    expect(getByTestId('option-price').textContent).toMatch('300')
    expect(getByTestId('option-image')).toHaveAttribute('src', '#')
  })

  it('should call function', () => {
    const fn = jest.fn()
    const title = 'Title test'
    const { getByTestId } = render(
      <Option
        price={300}
        imageUrl="#"
        title={title}
        onClick={fn}
      />
    )

    const wrapper = getByTestId('option')
    wrapper.click()

    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith({ title })
  })
})