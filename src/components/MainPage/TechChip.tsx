import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { AiFillQuestionCircle } from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'

import { theme } from '@/config/theme'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import { TTechnologies } from '@/models/TTechnologies'

function TechChip({ label, iconName }: TTechnologies) {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <Box
      display="inline-flex"
      border={1}
      borderRadius={2}
      p={isSmallScreen ? '8px 15px' : 2}
      flexDirection={isSmallScreen ? 'row' : 'column'}
      alignItems="center"
      justifyContent="center"
      gap={isSmallScreen ? 1 : 2}
      width={isSmallScreen ? 'auto' : 120}
      margin={1}
      sx={{
        ':hover': {
          color: blue['700']
        },
        transition: theme.transitions.create('color', {
          duration: theme.transitions.duration.short
        })
      }}
    >
      {SiIcons[iconName]?.({
        size: isSmallScreen ? 20 : 40
      }) || <AiFillQuestionCircle style={{ color: 'white' }} />}

      <Typography textAlign="center">{label}</Typography>
    </Box>
  )
}

export default TechChip
