import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthLayout } from './components/layouts/AuthLayout'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { AppLayout } from './components/layouts/AppLayout'
import { MapPage } from './pages/map/MapPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { AuthProvider } from './providers/AuthProvider'

export const App = () => {
  return (
    <AuthProvider>
      {isLoggedIn => (
        <Router>
          <Switch>
            {isLoggedIn ? (
              <AppLayout>
                <Route path={'/'} exact>
                  <MapPage />
                </Route>
                <Route path={'/profile'}>
                  <ProfilePage />
                </Route>
              </AppLayout>
            ) : (
              <AuthLayout>
                <Route path={'/'} exact>
                  <LoginPage />
                </Route>
                <Route path={'/register'}>
                  <RegisterPage />
                </Route>
              </AuthLayout>
            )}
            <Redirect to={'/'} />
          </Switch>
        </Router>
      )}
    </AuthProvider>
  )
}
