import CachedIcon from '@mui/icons-material/Cached'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import { Grid, IconButton, Typography } from '@mui/material'
import { useState } from 'react'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'

interface TCountState {
  likes: number
  retweet: number
  comments: number
  stats: number
}

function Buttons() {
  const { isSmallestScreen } = useIsSmallScreen()
  const [count, setCount] = useState<TCountState>({
    likes: Math.floor(Math.random() * 999),
    retweet: Math.floor(Math.random() * 999),
    comments: Math.floor(Math.random() * 999),
    stats: Math.floor(Math.random() * 999)
  })

  const setButtonCount = (countState: keyof TCountState) => {
    setCount((previous) => {
      return {
        ...previous,
        [countState]: previous[countState] + 1
      }
    })
  }

  return (
    <Grid container paddingLeft={isSmallestScreen ? '49px' : '59px'} mt={1}>
      <Grid item xs justifyContent="center">
        <IconButton onClick={setButtonCount.bind(null, 'comments')}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 17 }} />
          {count.comments !== 0 && (
            <Typography variant="subtitle2" color="gray" ml={1}>
              {count.comments}
            </Typography>
          )}
        </IconButton>
      </Grid>
      <Grid item xs justifyContent="center">
        <IconButton onClick={setButtonCount.bind(null, 'retweet')}>
          <CachedIcon sx={{ fontSize: 18 }} />
          {count.retweet !== 0 && (
            <Typography variant="subtitle2" color="gray" ml={1}>
              {count.retweet}
            </Typography>
          )}
        </IconButton>
      </Grid>
      <Grid item xs justifyContent="center">
        <IconButton onClick={setButtonCount.bind(null, 'likes')}>
          <FavoriteBorderIcon sx={{ fontSize: 17 }} htmlColor="gray" />
          {count.likes !== 0 && (
            <Typography variant="subtitle2" color="gray" ml={1}>
              {count.likes}
            </Typography>
          )}
        </IconButton>
      </Grid>
      <Grid item xs justifyContent="center">
        <IconButton onClick={setButtonCount.bind(null, 'stats')}>
          <LeaderboardIcon sx={{ fontSize: 17 }} htmlColor="gray" />
          {count.stats !== 0 && (
            <Typography variant="subtitle2" color="gray" ml={1}>
              {count.stats}
            </Typography>
          )}
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Buttons
