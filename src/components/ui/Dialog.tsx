import CloseIcon from '@mui/icons-material/Close'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import {
  Dispatch,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  SetStateAction
} from 'react'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'

const SlideTransition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type IConfirmArwenDialog = {
  openDialog: boolean
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export default function DialogComponent({
  openDialog,
  setOpenDialog,
  children
}: IConfirmArwenDialog) {
  const handleClose = () => setOpenDialog(false)
  const isSmallScreen = useIsSmallScreen()

  return (
    <Dialog
      open={openDialog}
      maxWidth="sm"
      fullWidth
      TransitionComponent={SlideTransition}
      fullScreen={isSmallScreen}
    >
      <DialogTitle display="flex" flexDirection="column" alignItems="flex-end">
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
