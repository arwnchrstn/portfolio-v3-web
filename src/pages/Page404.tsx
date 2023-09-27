import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import useSetPageTitle from '@/hooks/useSetPageTitle'

function Page404() {
  useSetPageTitle('Not Found')

  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <Typography variant="h6">404 | Page not found</Typography>
      <Button color="primary" variant="contained" component={Link} to="/">
        Back to Home
      </Button>
    </Box>
  )
}

export default Page404
