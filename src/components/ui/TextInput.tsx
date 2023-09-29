import {
  BaseTextFieldProps,
  StandardTextFieldProps,
  TextField
} from '@mui/material'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type TTextInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
} & (BaseTextFieldProps | StandardTextFieldProps)

export default function TextInput<T extends FieldValues>({
  control,
  name,
  ...rest
}: TTextInputProps<T>) {
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
        />
      )}
      name={name}
      control={control}
    />
  )
}
