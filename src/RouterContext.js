import React, { useEffect, useState } from 'react'
import { AuthLayout } from './components/layouts/AuthLayout'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { AppLayout } from './components/layouts/AppLayout'
import { MapPage } from './pages/map/MapPage'
import { ProfilePage } from './pages/profile/ProfilePage'

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
  '/profile': () => (
    <AppLayout>
      <ProfilePage/>
    </AppLayout>
  ),
}

export const RouterContext = React.createContext({
  currentRoute: '/login',
  currentComponent: null,
  navigateTo: (route) => {}
})

export const RouterProvider = ({ children }) => {
  const router = (url) => {
    return routes[url] ? routes[url]() : routes['/login']()
  }

  const [currentRoute, setRoute] = useState('/login')
  const [currentComponent, setComponent] = useState(null)

  const handleChangePage = (page) => {
    setRoute(page)
  }

  useEffect(() => {
    setComponent(router(currentRoute))
  }, [currentRoute])

  return (
    <RouterContext.Provider
      value={{
        currentRoute,
        currentComponent,
        navigateTo: handleChangePage
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}