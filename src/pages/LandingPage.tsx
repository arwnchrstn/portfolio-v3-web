import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import ALogo from '@/assets/Logo.png'
// import ArwenSigninButton from '@/components/LandingPage/ArwenSigninButton'
import Navbar from '@/components/ui/Navbar'
import useSetPageTitle from '@/hooks/useSetPageTitle'

function LandingPage() {
  useSetPageTitle('Home')

  return (
    <Container
      sx={{
        height: '100dvh',
        py: 2,
        px: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Grid
        container
        gap={10}
        alignItems="center"
        mt={{ xs: 2, md: 8 }}
        pb={4}
        flex={1}
      >
        <Grid item xs={12} md display={{ xs: 'none', md: 'block' }}>
          <img
            alt="rwnchrstn.dev logo"
            src={ALogo}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Box>
            <Stack gap={4}>
              <Typography variant="h2" fontWeight="bold">
                Arwen Christian Ceres
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                Full Stack Web Developer.
              </Typography>
            </Stack>

            <Grid container mt={4}>
              <Grid item xs={12} sm={7} md={7} lg={6}>
                <Stack gap={3}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/rwnchrstn/about"
                  >
                    View as Guest
                  </Button>
                  {/* <ArwenSigninButton /> */}
                </Stack>
              </Grid>
            </Grid>

            <Typography
              fontStyle="italic"
              variant="subtitle2"
              color="GrayText"
              mt={7}
            >
              A Twitter inspired portfolio built using React with Vite,
              TypeScript and Material UI.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingPage
