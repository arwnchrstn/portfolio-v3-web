import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import TextInput from '@/components/ui/TextInput'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import { ConnectSchema, TConnectSchema } from '@/models/form/ConnectSchema'

const defaultFormValues: TConnectSchema = {
  email: '',
  name: '',
  message: ''
}

function ConnectForm({ isOpen }: { isOpen?: boolean }) {
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
    console.log(data)
  }

  useEffect(() => {
    if (isOpen) return

    reset()
  }, [isOpen])

  return (
    <Box mt={isSmallScreen ? 4 : 0}>
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
          label="Name"
          size={isSmallScreen ? 'medium' : 'small'}
        />

        <TextInput
          control={control}
          name="email"
          label="Email"
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
        >
          Send Message
        </Button>
      </Stack>
    </Box>
  )
}

export default ConnectForm
