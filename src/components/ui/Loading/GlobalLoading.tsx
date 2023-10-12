import { Stack, Typography, Box } from '@mui/material'

import ALogo from '@/assets/Logo.png'
import { useEffect, useState } from 'react'

function GlobalLoading() {
  const [showAdvisory, setShowAdvisory] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAdvisory(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <Stack justifyContent="center" alignItems="center" height="100dvh">
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
      {showAdvisory && (
        <Box textAlign="center" px={4}>
          <Typography color="grey.600">
            If you are seeing this, the website might be inactive for a while.
            Please wait while we heat up the server from a cold start, this
            might take a while. Thanks!
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

export default GlobalLoading
