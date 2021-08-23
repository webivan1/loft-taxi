import { render } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('should render child text', () => {
    const { getByText } = render(<Heading>Some heading</Heading>)
    expect(getByText('Some heading')).toBeInTheDocument()
  })

  it('should display custom classname', () => {
    const { getByText } = render(<Heading className="some-class">Some heading</Heading>)
    expect(getByText('Some heading')).toHaveClass('some-class')
  })
})