import { Stack } from '@mui/material'

import ALogo from '@/assets/Logo.png'

function GlobalLoading() {
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
    </Stack>
  )
}

export default GlobalLoading
