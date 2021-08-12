import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from './components/layouts/AppLayout';
import { AuthLayout } from './components/layouts/AuthLayout';
import { LoginPage } from './components/pages/auth/LoginPage';
import { RegisterPage } from './components/pages/auth/RegisterPage';
import { UserContext } from './userContext';

const routes = {
  '/login': (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  ),
  '/register': (
    <AuthLayout>
      <RegisterPage />
    </AuthLayout>
  ),
  '/app': (
    <AppLayout>
      App
    </AppLayout>
  )
}

const router = (url) => {
  return routes[url] ?? routes['/login']
}

export const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)
  const [currentPage, onChangePage] = useState(router('/login'))

  const handleLogIn = () => {
    toggleLogin(true)
  }

  const handleLogOut = () => {
    toggleLogin(false)
  }

  const handleChangePage = (page) => {
    onChangePage(router(page))
  }

  return (
    <Router>
      <UserContext.Provider value={{
        isLoggedIn,
        handleLogIn,
        handleLogOut,
        handleChangePage
      }}>
        {currentPage}

        {/* {isLoggedIn ? (
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
        )} */}
      </UserContext.Provider>
    </Router>
  )
}
