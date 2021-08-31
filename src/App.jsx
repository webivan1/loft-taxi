import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthLayout } from './components/layouts/AuthLayout'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { AppLayout } from './components/layouts/AppLayout'
import { MapPage } from './pages/map/MapPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { RouteWithLayout } from './components/router/RouteWithLayout'
import { AuthProvider } from './providers/AuthProvider'

export const App = () => (
  <AuthProvider>
    {isLoggedIn =>
      <Router>
        {isLoggedIn ? (
          <Switch>
            <RouteWithLayout path="/" exact layout={AppLayout} component={MapPage} />
            <RouteWithLayout path="/profile" layout={AppLayout} component={ProfilePage} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <RouteWithLayout path="/login" layout={AuthLayout} component={LoginPage} />
            <RouteWithLayout path="/register" layout={AuthLayout} component={RegisterPage} />
            <Redirect to="/login" />
          </Switch>
        )}
      </Router>
    }
  </AuthProvider>
)
