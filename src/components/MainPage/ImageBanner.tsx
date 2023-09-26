import Banner from '@/assets/Banner.png'
import Profile from '@/assets/Profile.jpg'
import { Box } from '@mui/material'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import { DARK } from '@/config/theme'

export default function ImageBanner() {
  const isSmallScreen = useIsSmallScreen()

  return (
    <Box
      borderRadius={isSmallScreen ? 0 : 4}
      sx={{ height: '100%', aspectRatio: '16/5', position: 'relative' }}
      mb={isSmallScreen ? '15%' : '13%'}
    >
      <img alt="Banner" src={Banner} width="100%" />

      <Box
        borderRadius="50%"
        border={isSmallScreen ? 3 : 5}
        borderColor={DARK}
        overflow="hidden"
        sx={{
          width: '100%',
          aspectRatio: '1/1',
          position: 'absolute',
          maxWidth: '25%',
          bottom: '-35%',
          left: '5%'
        }}
      >
        <img alt="Profile" src={Profile} width="100%" />
      </Box>
    </Box>
  )
}
