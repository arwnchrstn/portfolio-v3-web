import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Button, Stack } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useState } from 'react'

import Banner from '@/assets/Banner.png'
import Profile from '@/assets/Profile.jpg'
import DialogComponent from '@/components/ui/Dialog'
import { DARK } from '@/config/theme'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

type TSocialLinks = 'github' | 'linkedin'
const socialLinks: Record<TSocialLinks, string> = {
  github: 'https://github.com/arwnchrstn',
  linkedin: 'https://www.linkedin.com/in/arwenceres/'
}

function ImageBanner() {
  const { isSmallScreen, isSmallestScreen } = useIsSmallScreen()
  const [open, setOpen] = useState<boolean>(false)

  const openSocials = (socialLinkKey: TSocialLinks) => {
    window.open(socialLinks[socialLinkKey])
  }

  return (
    <Box sx={{ position: 'relative' }} mb={isSmallScreen ? '13%' : '10%'}>
      <img
        alt="Banner"
        src={Banner}
        width="100%"
        style={{
          aspectRatio: isSmallScreen ? '16/5' : '16/4',
          objectFit: 'cover'
        }}
      />

      <Button
        variant="outlined"
        color="inherit"
        sx={{ position: 'absolute', right: '5%', bottom: -50 }}
        size={isSmallestScreen ? 'small' : 'medium'}
        onClick={() => setOpen(true)}
      >
        Socials
      </Button>

      <Box
        borderRadius="50%"
        border={isSmallScreen ? 3 : 5}
        borderColor={DARK}
        overflow="hidden"
        sx={{
          width: '100%',
          aspectRatio: '1/1',
          position: 'absolute',
          maxWidth: isSmallScreen ? '20%' : '17%',
          bottom: '-28%',
          left: '5%'
        }}
      >
        <img alt="Profile" src={Profile} width="100%" />
      </Box>

      <DialogComponent
        openDialog={open}
        setOpenDialog={setOpen}
        title="Socials"
      >
        <Stack gap={2} height="100%" justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<GitHubIcon sx={{ fill: blue['700'] }} />}
            sx={{ fontWeight: 'bold' }}
            onClick={openSocials.bind(null, 'github')}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<LinkedInIcon sx={{ fill: blue['700'] }} />}
            sx={{ fontWeight: 'bold' }}
            onClick={openSocials.bind(null, 'linkedin')}
          >
            LinkedIn
          </Button>
        </Stack>
      </DialogComponent>
    </Box>
  )
}

export default ImageBanner
