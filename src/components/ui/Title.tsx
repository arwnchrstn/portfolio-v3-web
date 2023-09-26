import { Typography, TypographyProps } from '@mui/material'
import { blue } from '@mui/material/colors'

type TTitleProps = {
  title: string
} & TypographyProps

export default function Title({ title, ...rest }: TTitleProps) {
  return (
    <Typography
      variant="h5"
      fontWeight="bold"
      borderLeft={3}
      pl={3}
      borderColor={blue['500']}
      {...rest}
    >
      {title}
    </Typography>
  )
}
