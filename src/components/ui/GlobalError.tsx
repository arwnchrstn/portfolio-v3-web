import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function GlobalError() {
  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        px: 5
      }}
    >
      <Typography textAlign="center" variant="h6">
        Something went wrong. Don&#39;t worry, it&#39;s not your fault
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to Home
      </Button>
    </Box>
  )
}
