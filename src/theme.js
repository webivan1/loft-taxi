import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {},
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ':root': {
          '--background-dark-color': '#1C1A19',
          '--btn-bg': '#FDBF5A',
          '--btn-active-bg': '#FFA842',
          '--btn-disabled-bg': '#D8D7D5',
          '--btn-color': '#000',
          '--btn-active-color': '#000',
          '--btn-disabled-color': '#737373'
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          width: '100%',
          flexDirection: 'column'
        },
        'main': {
          flex: 1
        }
      },
    },
  },
})

export default theme