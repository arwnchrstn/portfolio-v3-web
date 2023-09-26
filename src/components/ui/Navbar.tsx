import { Box } from '@mui/material'

import Logo from '@/components/ui/Logo'

export default function Navbar() {
  return (
    <Box py={2} display={{ xs: 'block', md: 'none' }}>
      <Logo width={50} />
    </Box>
  )
}
