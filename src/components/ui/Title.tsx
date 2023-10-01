import { Box, Typography, TypographyProps } from '@mui/material'

import { DARK } from '@/config/theme'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

type TTitleProps = {
  title: string
} & TypographyProps

export default function Title({ title, ...rest }: TTitleProps) {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <Box
      p={2}
      position={['sticky', '-webkit-sticky']}
      top={0}
      left={0}
      zIndex={1000}
      bgcolor={DARK}
      borderBottom={1}
      borderColor="grey.700"
    >
      <Typography
        variant={isSmallScreen ? 'subtitle1' : 'h6'}
        fontWeight="bold"
        {...rest}
      >
        {title}
      </Typography>
    </Box>
  )
}
