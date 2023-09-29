import { Box, Typography, TypographyProps } from '@mui/material'

import { DARK } from '@/config/theme'

type TTitleProps = {
  title: string
} & TypographyProps

export default function Title({ title, ...rest }: TTitleProps) {
  return (
    <Box
      p={2}
      position={['sticky', '-webkit-sticky']}
      top={0}
      left={0}
      zIndex={1000}
      bgcolor={DARK}
    >
      <Typography variant="h6" fontWeight="bold" {...rest}>
        {title}
      </Typography>
    </Box>
  )
}
