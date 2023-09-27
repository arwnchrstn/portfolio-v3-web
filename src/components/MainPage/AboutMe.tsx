import { Box, Typography } from '@mui/material'

import Title from "@/components/ui/Title"

export default function AboutMe() {
  const myAge = new Date().getFullYear() - 2000

  return (
    <Box mt={6}>
      <Title title="About Me" variant="h6" mb={2} />
      <Typography lineHeight={2} mb={3}>
        Hi! I am Arwen, {myAge} years old, a Full Stack Web Developer based in
        the Philippines. I mainly code using JavaScript / TypeScript for both
        front-end and back-end. I have been in the industry for almost a year
        now and been exposed on some engagements creating user interfaces,
        gathering business requirements turning them into useful applications
        and integrating external APIs.
      </Typography>
    </Box>
  )
}
