import { AlertColor, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { forwardRef } from 'react'

interface TSnackBarProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  severity: AlertColor
  message: string
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function SnackBarComponent(props: TSnackBarProps) {
  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{
        maxWidth: '350px'
      }}
    >
      <Alert onClose={handleClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBarComponent
