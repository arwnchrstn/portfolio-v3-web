import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import { Box, Stack, Typography } from '@mui/material'

function ProfileHeader() {
  return (
    <Stack gap={0.5} mb={5}>
      <Typography fontWeight="bold" mb={1.5}>
        awen / wen
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <PersonIcon color="inherit" fontSize="small" />
        <Typography variant="subtitle2" color="gray">
          Arwen Christian Ceres
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <LocationOnIcon color="inherit" fontSize="small" />
        <Typography variant="subtitle2" color="gray">
          Laguna, Philippines
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <CalendarMonthIcon color="inherit" fontSize="small" />
        <Typography variant="subtitle2" color="gray">
          Joined the IT industry November 2022
        </Typography>
      </Box>
    </Stack>
  )
}

export default ProfileHeader
