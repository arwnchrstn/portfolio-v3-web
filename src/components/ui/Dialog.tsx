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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type IConfirmArwenDialog = {
  openDialog: boolean
  setOpenDialog: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  title?: string
}

export default function DialogComponent({
  openDialog,
  setOpenDialog,
  children,
  title
}: IConfirmArwenDialog) {
  const handleClose = () => setOpenDialog(false)
  const { isSmallestScreen } = useIsSmallScreen()

  return (
    <Dialog
      open={openDialog}
      maxWidth="sm"
      fullWidth
      TransitionComponent={SlideTransition}
      fullScreen={isSmallestScreen}
    >
      <DialogTitle
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={title ? 'space-between' : 'flex-end'}
        fontWeight="bold"
      >
        {title}
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
