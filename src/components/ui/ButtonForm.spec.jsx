import { render, fireEvent,  } from '@testing-library/react'
import { ButtonForm } from './ButtonForm'

describe('ButtonForm', () => {
  const renderButton = ({ children = 'TEST', ...props } = {}) => {
    const methods = render(
      <ButtonForm {...props}>{children}</ButtonForm>
    )

    return {
      ...methods,
      btn: methods.getByRole('button')
    }
  }

  it('should render button', () => {
    const { btn } = renderButton({
      children: 'Some text'
    })

    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('Some text')
  })

  it('should call event onClick', () => {
    const fn = jest.fn()
    const { btn } = renderButton({
      onClick: fn
    })

    fireEvent.click(btn)
    fireEvent.click(btn)

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should be disabled button', () => {
    const { btn } = renderButton({
      disabled: true
    })

    expect(btn).toHaveAttribute('disabled')
  })

  it('should add classnames', () => {
    const { btn } = renderButton({
      className: 'test-class-name',
      fullWidth: true
    })

    expect(btn).toHaveClass('test-class-name')
    expect(btn).toHaveClass('full-width')
  })
})