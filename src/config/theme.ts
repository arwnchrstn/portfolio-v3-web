import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const DARK = '#101418'

export const theme = createTheme({
  palette: {
    background: {
      default: DARK
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 8
        }
      }
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          sx: { backgroundColor: DARK }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'grey'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&>fieldset': {
            borderColor: 'grey'
          },
          '&:hover': {
            borderColor: 'grey'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderTop: 'thin solid grey',
          margin: '15px 0',
          '&.MuiDivider-withChildren': {
            '& > span': {
              color: 'grey',
              fontSize: 13
            },
            '&::after': {
              borderTop: 'thin solid grey'
            },
            '&::before': {
              borderTop: 'thin solid grey'
            },
            border: 'none'
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: blue['700'],
            '& span': {
              fontWeight: 'bold'
            }
          },
          borderRadius: 8,
          backgroundColor: 'none'
        }
      }
    }
  }
})
