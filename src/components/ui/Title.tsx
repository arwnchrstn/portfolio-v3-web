import { Typography, TypographyProps } from '@mui/material'

type TTitleProps = {
  title: string
} & TypographyProps

export default function Title({ title, ...rest }: TTitleProps) {
  return (
    <Typography variant="h5" fontWeight="bold" mb={1} {...rest}>
      {title}
    </Typography>
  )
}
