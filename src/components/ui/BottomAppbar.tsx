import { AppBar, Box, IconButton, Stack } from '@mui/material'
import blue from '@mui/material/colors/blue'
import { useLocation, useNavigate } from 'react-router-dom'

import { navLinks } from '@/config/navlinks'
import { DARK } from '@/config/theme'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function BottomAppbar() {
  const { isSmallestScreen } = useIsSmallScreen()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <AppBar
      position="fixed"
      sx={{
        bottom: 0,
        top: 'auto',
        bgcolor: DARK,
        display: isSmallestScreen ? 'block' : 'none'
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        borderTop={1}
        pt={0.5}
        borderColor="grey.700"
      >
        {navLinks.map((link, index) => (
          <Box
            borderBottom={pathname.includes(link.path) ? 3 : 0}
            borderColor={blue['700']}
          >
            <IconButton key={index} onClick={() => navigate(link.path)}>
              {
                <link.icon
                  color="primary"
                  sx={{
                    fill: pathname.includes(link.path) ? blue['700'] : 'white',
                    fontSize: '25px'
                  }}
                />
              }
            </IconButton>
          </Box>
        ))}
      </Stack>
    </AppBar>
  )
}

export default BottomAppbar
