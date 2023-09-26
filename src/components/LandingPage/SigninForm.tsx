import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

import { ISigninSchema,SigninSchema } from '@/models/form/SigninSchema'

import TextInput from '../ui/TextInput'

const defaultFormValue: ISigninSchema = {
  username: '',
  secretKey: ''
}

export default function SigninForm() {
  const { handleSubmit, control } = useForm<ISigninSchema>({
    defaultValues: defaultFormValue,
    reValidateMode: 'onChange',
    resetOptions: {
      keepDefaultValues: true
    },
    mode: 'onSubmit',
    resolver: yupResolver<ISigninSchema>(SigninSchema)
  })

  const handleSignin = (data: ISigninSchema) => {
    console.log(data)
  }

  return (
    <Stack mt={3}>
      <Stack gap={2}>
        <TextInput<ISigninSchema>
          control={control}
          name="username"
          label="Enter username"
        />

        <TextInput<ISigninSchema>
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
