import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

import TextInput from '@/components/ui/TextInput'
import { SigninSchema, TSigninSchema } from '@/models/form/SigninSchema'

const defaultFormValue: TSigninSchema = {
  username: '',
  secretKey: ''
}

export default function SigninForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: defaultFormValue,
    reValidateMode: 'onChange',
    resetOptions: {
      keepDefaultValues: true
    },
    mode: 'onSubmit',
    resolver: yupResolver(SigninSchema)
  })

  const handleSignin = (data: TSigninSchema) => {
    console.log(data)
  }

  return (
    <Stack mt={3}>
      <Stack gap={2}>
        <TextInput control={control} name="username" label="Enter username" />

        <TextInput
          control={control}
          name="secretKey"
          label="Enter secret key"
        />

        <Button
          variant="contained"
          sx={{ alignSelf: 'end' }}
          onClick={handleSubmit(handleSignin)}
          type="submit"
        >
          Sign in
        </Button>

        <Divider>OR</Divider>

        <Button variant="outlined" type="button">
          View Portfolio CMS Dashboard Demo
        </Button>
      </Stack>
    </Stack>
  )
}
