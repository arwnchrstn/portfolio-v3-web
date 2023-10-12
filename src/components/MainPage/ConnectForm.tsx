import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '@/components/ui/TextInput'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import { ConnectSchema, TConnectSchema } from '@/models/form/ConnectSchema'
import emailjs from '@emailjs/browser'
import SnackBar from '@/components/ui/Snackbar'

const defaultFormValues: TConnectSchema = {
  email: '',
  name: '',
  message: ''
}

function ConnectForm({ isOpen }: { isOpen?: boolean }) {
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)
  const { isSmallScreen } = useIsSmallScreen()
  const { control, handleSubmit, reset } = useForm({
    reValidateMode: 'onChange',
    mode: 'all',
    resetOptions: {
      keepDefaultValues: true
    },
    defaultValues: defaultFormValues,
    resolver: yupResolver(ConnectSchema)
  })

  const submitForm = (data: TConnectSchema) => {
    setIsSending(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PK
      )
      .then(() => {
        setOpenSuccess(true)
        reset()
      })
      .catch((error) => {
        setOpenError(true)
        console.log(error)
      })
      .finally(() => setIsSending(false))
  }

  useEffect(() => {
    if (isOpen) return
    if (!isOpen && isSending) return

    reset()
  }, [isOpen])

  return (
    <Box mt={isSmallScreen ? 4 : 0}>
      <SnackBar
        open={openSuccess}
        setOpen={setOpenSuccess}
        severity="success"
        message="Message sent!"
      />
      <SnackBar
        open={openError}
        setOpen={setOpenError}
        severity="error"
        message="Failed to send message"
      />

      <Typography variant="subtitle2" color="grey">
        Thank you for visiting my portfolio. If you'd like to get in touch with
        me for collaborations / freelancing, send feedback or questions, feel
        free to send a message right here. Hoping to work with you at some time.
        Cheers!
      </Typography>

      <Stack mt={2} gap={2}>
        <TextInput
          control={control}
          name="name"
          label="Your name"
          size={isSmallScreen ? 'medium' : 'small'}
        />

        <TextInput
          control={control}
          name="email"
          label="Your email"
          size={isSmallScreen ? 'medium' : 'small'}
        />

        <TextInput
          control={control}
          name="message"
          label="Message"
          multiline
          minRows={4}
          maxRows={4}
          size={isSmallScreen ? 'medium' : 'small'}
        />

        <Button
          variant="contained"
          size={isSmallScreen ? 'large' : 'medium'}
          sx={{ alignSelf: 'flex-end' }}
          onClick={handleSubmit(submitForm)}
          disabled={isSending}
        >
          Send Message
          {isSending && (
            <CircularProgress
              size={18}
              sx={{
                ml: 1
              }}
            />
          )}
        </Button>
      </Stack>
    </Box>
  )
}

export default ConnectForm
