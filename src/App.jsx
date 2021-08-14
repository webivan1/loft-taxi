import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContext } from './userContext'
import { AppLayout } from './components/layouts/AppLayout'
import { AuthLayout } from './components/layouts/AuthLayout'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { MapPage } from './pages/map/MapPage'

const routes = {
  '/login': () => (
    <AuthLayout>
      <LoginPage/>
    </AuthLayout>
  ),
  '/register': () => (
    <AuthLayout>
      <RegisterPage/>
    </AuthLayout>
  ),
  '/map': () => (
    <AppLayout>
      <MapPage/>
    </AppLayout>
  ),
}

const router = (url) => {
  return routes[url] ? routes[url]() : routes['/login']()
}

export const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)
  const [currentPage, onChangePage] = useState(router('/login'))

  const handleChangePage = (page) => {
    onChangePage(router(page))
  }

  const handleLogIn = () => {
    toggleLogin(true)
  }

  const handleLogOut = () => {
    toggleLogin(false)
    handleChangePage('/login')
  }

  return (
    <Router>
      <UserContext.Provider value={{
        isLoggedIn,
        handleLogIn,
        handleLogOut,
        handleChangePage,
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
