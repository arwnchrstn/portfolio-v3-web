import { Stack } from '@mui/material'

import ALogo from '@/assets/Logo.png'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

export default function PageLoading() {
  const { isSmallScreen } = useIsSmallScreen()
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height={isSmallScreen ? '100dvh' : '100%'}
    >
      <img
        alt="rwnchrstn.dev logo"
        src={ALogo}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100px',
          minWidth: '45px'
        }}
        className="animate-flicker"
      />
    </Stack>
  )
}
