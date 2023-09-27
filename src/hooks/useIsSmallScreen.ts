import { useMediaQuery, useTheme } from '@mui/material'

export default function useIsSmallScreen() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallestScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return { isSmallScreen, isSmallestScreen }
}
