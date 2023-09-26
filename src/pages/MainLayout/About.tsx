import AboutMe from '@/components/MainPage/AboutMe'
import ImageBanner from '@/components/MainPage/ImageBanner'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { Box, Typography } from '@mui/material'

function About() {
  useSetPageTitle('About')

  return (
    <Box>
      <ImageBanner />

      <Box px={'4%'}>
        <Typography fontWeight="bold">awen / wen</Typography>
        <Typography variant="subtitle2" color="gray">
          Arwen Christian Ceres
        </Typography>
        <Typography variant="subtitle2" color="gray">
          Laguna, Philippines
        </Typography>

        <AboutMe />
      </Box>
    </Box>
  )
}

export default About
