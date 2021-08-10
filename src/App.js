import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppLayout } from './components/layouts/AppLayout';
import { AuthLayout } from './components/layouts/AuthLayout';
import { LoginPage } from './components/pages/auth/LoginPage';
import { RegisterPage } from './components/pages/auth/RegisterPage';
import { UserContext } from './userContext';

export const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)

  const handleLogIn = () => {
    toggleLogin(true)
  }

  const handleLogOut = () => {
    toggleLogin(false)
  }

  return (
    <Router>
      <UserContext.Provider value={{
        isLoggedIn,
        handleLogIn,
        handleLogOut
      }}>
        {isLoggedIn ? (
          <AppLayout>
            <Switch>
              <Route path="/" exact>
              </Route>
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </AuthLayout>
        )}
      </UserContext.Provider>
    </Router>
  )
}
