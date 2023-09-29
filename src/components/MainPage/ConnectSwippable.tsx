import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

import ConnectForm from '@/components/MainPage/ConnectForm'
import { DARK } from '@/config/theme'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

const OPEN_HEIGHT = '70%'
const CLOSE_HEIGHT = '55px'

function ConnectSwippable() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const theme = useTheme()
  const { isSmallScreen } = useIsSmallScreen()

  const handleOpenSwippable = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box
      width="420px"
      height={isOpen ? OPEN_HEIGHT : CLOSE_HEIGHT}
      bgcolor={DARK}
      borderRadius="10px 10px 0 0"
      position="fixed"
      zIndex={999}
      bottom={0}
      right="4%"
      sx={{
        boxShadow: '0px 0px 10px 1px rgba(255,255,255,0.25)',
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.short,
          easing: theme.transitions.easing.easeOut
        })
      }}
      display={isSmallScreen ? 'none' : 'block'}
    >
      <Stack
        p={2}
        borderBottom={1}
        borderColor="grey.700"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{
          cursor: 'pointer'
        }}
        onClick={handleOpenSwippable}
      >
        <Typography fontWeight="bold" variant="subtitle1">
          Let's Connect
        </Typography>
        {isOpen ? (
          <KeyboardDoubleArrowDownIcon />
        ) : (
          <KeyboardDoubleArrowUpIcon />
        )}
      </Stack>
      <Box p={2} pb={10} overflow="auto" height="100%">
        <ConnectForm isOpen={isOpen} />
      </Box>
    </Box>
  )
}

export default ConnectSwippable
