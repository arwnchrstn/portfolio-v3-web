import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function PageError() {
  const navigate = useNavigate()

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
      <Button variant="contained" onClick={() => navigate(0)} size="small">
        Reload
      </Button>
    </Box>
  )
}
