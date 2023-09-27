import { Box, Stack, Typography } from '@mui/material'

import Profile from '@/assets/Profile.jpg'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function TweetHeader() {
  const { isSmallestScreen } = useIsSmallScreen()

  return (
    <Stack gap={1} direction="row" alignItems="center">
      <Box
        borderRadius="50%"
        overflow="hidden"
        width={isSmallestScreen ? 40 : 50}
      >
        <img src={Profile} alt="profile" width="100%" />
      </Box>
      <Box>
        <Typography fontWeight="bold">awen</Typography>
        <Typography variant="subtitle2" color="gray">
          Arwen Christian Ceres
        </Typography>
      </Box>
    </Stack>
  )
}

export default TweetHeader
