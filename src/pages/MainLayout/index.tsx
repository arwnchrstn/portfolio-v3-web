import CodeIcon from '@mui/icons-material/Code'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
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
import CustomDrawer from '@/components/ui/CustomDrawer'
import Logo from '@/components/ui/Logo'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

const listItems = [
  { text: 'About', icon: <PersonIcon />, path: 'about' },
  { text: 'Experience', icon: <WorkIcon />, path: 'experience' },
  { text: 'Education', icon: <SchoolIcon />, path: 'education' },
  { text: 'Techologies', icon: <CodeIcon />, path: 'technologies' },
  {
    text: "Let's Connect",
    icon: <ConnectWithoutContactIcon />,
    path: 'connect'
  }
]

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
            {listItems.map((list, index) => {
              if (list.path === 'connect' && !isSmallScreen) return

              return (
                <ListItem disableGutters disablePadding key={index}>
                  <ListItemButton
                    selected={pathname.includes(list.path)}
                    component={Link}
                    to={list.path}
                  >
                    <ListItemIcon>{list.icon}</ListItemIcon>
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
    </Container>
  )
}

export default MainLayout
