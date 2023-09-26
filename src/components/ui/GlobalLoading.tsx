import { Box } from '@mui/material'

import ALogo from '@/assets/Logo.png'

function GlobalLoading() {
  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        alt="rwnchrstn.dev logo"
        src={ALogo}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '115px',
          minWidth: '60px'
        }}
        className="animate-flicker"
      />
    </Box>
  )
}

export default GlobalLoading
