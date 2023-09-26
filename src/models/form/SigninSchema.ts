import * as yup from 'yup'

const stringSchema = yup.string().trim()

export const SigninSchema = yup.object().shape({
  username: stringSchema
    .typeError('Username must be a string')
    .max(100, 'Username is too long')
    .required('Please enter username'),
  secretKey: stringSchema
    .typeError('Secret key must be string')
    .max(100, 'Secret key is too long')
    .required('Please enter secret key')
})

export type ISigninSchema = yup.InferType<typeof SigninSchema>
