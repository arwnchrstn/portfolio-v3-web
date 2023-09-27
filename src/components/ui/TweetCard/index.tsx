import { Stack, Typography } from '@mui/material'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'

import Buttons from './Buttons'
import TweetHeader from './TweetHeader'

interface TTweetCard {
  tweet: string | React.JSX.Element | React.ReactNode
}

function TweetCard({ tweet }: TTweetCard) {
  const { isSmallestScreen } = useIsSmallScreen()
  return (
    <Stack gap={1} borderBottom={1} pt={3} pb={1} borderColor="gray">
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
