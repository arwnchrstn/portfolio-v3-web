import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'

import ConnectSwippable from '@/components/MainPage/ConnectSwippable'
import BottomAppbar from '@/components/ui/BottomAppbar'
import CustomDrawer from '@/components/ui/CustomDrawer'
import Logo from '@/components/ui/Logo'
import { navLinks } from '@/config/navlinks'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function MainLayout() {
  const { pathname } = useLocation()
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <Container
      sx={{ display: 'flex', position: 'relative' }}
      disableGutters={isSmallScreen}
      maxWidth="xl"
    >
      <ConnectSwippable />

      <CustomDrawer>
        <Box my={4}>
          <Stack alignItems={isSmallScreen ? 'center' : 'flex-start'}>
            <Logo width={40} />
          </Stack>

          <List
            sx={{
              mt: 2,
              overflow: 'hidden',
              display: 'flex',
              gap: 1.5,
              flexDirection: 'column'
            }}
          >
            {navLinks.map((list, index) => {
              if (list.path === 'connect' && !isSmallScreen) return

              return (
                <ListItem disableGutters disablePadding key={index}>
                  <ListItemButton
                    selected={pathname.includes(list.path)}
                    component={Link}
                    to={list.path}
                  >
                    <ListItemIcon>{<list.icon />}</ListItemIcon>
                    {!isSmallScreen && <ListItemText primary={list.text} />}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </CustomDrawer>
      <Box flex={1} p={0}>
        <Outlet />
      </Box>

      <BottomAppbar />
    </Container>
  )
}

export default MainLayout
