import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import SigninForm from '@/components/LandingPage/SigninForm'
import Dialog from '@/components/ui/Dialog'
import Logo from '@/components/ui/Logo'

export default function ArwenSigninButton() {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleClick = () => setOpenDialog(true)

  return (
    <>
      <Button variant="outlined" size="large" fullWidth onClick={handleClick}>
        Sign in as Arwen
      </Button>

      <Dialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
        <Stack alignItems="center" display={{ xs: 'flex', sm: 'none' }} my={2}>
          <Logo width={60} />
        </Stack>
        <Typography fontWeight="bold" variant="h6">
          Sign in as Arwen
        </Typography>
        <Typography variant="subtitle2" color="grey">
          Sign in to Portfolio CMS Dashboard
        </Typography>

        <SigninForm />
      </Dialog>
    </>
  )
}
