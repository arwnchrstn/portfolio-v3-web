import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function PageError() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Typography>An error occurred</Typography>
      <Button variant="contained" component={Link} to="/" size="small">
        Reload
      </Button>
    </Box>
  )
}
