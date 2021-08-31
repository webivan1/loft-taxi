import { Route } from 'react-router-dom'

export const RouteWithLayout = ({
  layout: Layout,
  component: RouteComponent,
  ...props
}) => {
  return (
    <Route {...props} render={routeProps =>
      <Layout>
        <RouteComponent {...routeProps} />
      </Layout>
    } />
  )
}