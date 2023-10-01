import { Box } from '@mui/material'
import { ReactNode } from 'react'

import ImageBanner from '@/components/ui/ImageBanner'
import Title from '@/components/ui/Title'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function TweetLayout({
  children,
  title
}: {
  children: ReactNode
  title: string
}) {
  const { isSmallScreen } = useIsSmallScreen()
  return (
    <Box pb={isSmallScreen ? 10 : 8} position={['sticky', '-webkit-sticky']}>
      <Title title={title} />
      <ImageBanner />

      <Box px={'3%'}>{children}</Box>
    </Box>
  )
}

export default TweetLayout
