import * as yup from 'yup'

const stringSchema = yup.string().trim()

export const ConnectSchema = yup.object().shape({
  name: stringSchema.max(256).required('Please enter your name'),
  email: stringSchema
    .email('Invalid email format')
    .max(256)
    .required('Please enter your email'),
  message: stringSchema.max(1000).required('Leave a message here')
})
export type TConnectSchema = yup.InferType<typeof ConnectSchema>
