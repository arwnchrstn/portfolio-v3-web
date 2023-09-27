import { Box } from '@mui/material'
import { ReactNode } from 'react'

import ImageBanner from './ImageBanner'

function TweetLayout({ children }: { children: ReactNode }) {
  return (
    <Box pb={4}>
      <ImageBanner />

      <Box px={'3%'}>{children}</Box>
    </Box>
  )
}

export default TweetLayout
