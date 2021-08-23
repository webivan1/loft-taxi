import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { App } from './App'
import { RouterProvider } from './RouterContext'
import { AuthProvider } from './AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
