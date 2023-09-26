import { Box } from '@mui/material'
import { ReactNode } from 'react'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'

type TCustomDrawerProps = {
  children: ReactNode
}

const CustomDrawer = ({ children }: TCustomDrawerProps) => {
  const isSmallScreen = useIsSmallScreen()

  return (
    <Box
      sx={{
        width: `${isSmallScreen ? 97 : 300}px`,
        position: ['-webkit-sticky', 'sticky'],
        top: 0,
        left: 0,
        height: '100dvh',
        overflow: 'auto',
        padding: '20px',
        borderRight: 'thin solid gray'
      }}
      width={isSmallScreen ? 97 : 300}
    >
      {children}
    </Box>
  )
}

export default CustomDrawer
