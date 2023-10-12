import { blue, grey } from '@mui/material/colors'
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
          borderRadius: 8,

          '&.Mui-disabled': {
            boxShadow: 'none',
            color: 'rgba(0,0,0,0.7)',
            backgroundColor: 'rgba(125,125,125,0.4)'
          }
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
          '&:hover:not(.Mui-error) > fieldset.MuiOutlinedInput-notchedOutline':
            {
              borderColor: blue['700']
            },
          '&>input': {
            color: grey['400']
          },
          '&>textarea': {
            color: grey['400']
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
