import {
  BaseTextFieldProps,
  StandardTextFieldProps,
  TextField} from '@mui/material'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type ITextInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
} & (BaseTextFieldProps | StandardTextFieldProps)

export default function TextInput<T extends FieldValues>({
  control,
  name,
  ...rest
}: ITextInputProps<T>) {
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          error={Boolean(error?.message)}
          helperText={error?.message}
          color="primary"
          variant="outlined"
          sx={{
            input: { color: 'white' }
          }}
        />
      )}
      name={name}
      control={control}
    />
  )
}
