import { RouteWithLayout } from './RouteWithLayout'
import { renderWithRedux } from '../../tests/utils/render'

describe('RouteWithLayout', () => {
  it('should display any layout', () => {
    const CustomLayout = ({ children }) => (
      <div data-testid="layout-test">
        {children}
      </div>
    )
    const { getByTestId, getByText } = renderWithRedux(
      <RouteWithLayout path="/" layout={CustomLayout} component={() => (
        <div>Test component</div>
      )} />
    )
    expect(getByTestId('layout-test')).toBeInTheDocument()
    expect(getByText('Test component')).toBeInTheDocument()
  })
})