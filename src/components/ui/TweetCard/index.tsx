import { Stack, Typography } from '@mui/material'

import Buttons from '@/components/ui/TweetCard/Buttons'
import TweetHeader from '@/components/ui/TweetCard/TweetHeader'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

interface TTweetCard {
  tweet: string | React.JSX.Element | React.ReactNode
}

function TweetCard({ tweet }: TTweetCard) {
  const { isSmallestScreen } = useIsSmallScreen()
  return (
    <Stack gap={1} borderBottom={1} pt={3} pb={1} borderColor="grey.700">
      <TweetHeader />
      <Typography
        paddingLeft={isSmallestScreen ? '49px' : '59px'}
        variant="subtitle1"
      >
        {tweet}
      </Typography>
      <Buttons />
    </Stack>
  )
}

export default TweetCard
