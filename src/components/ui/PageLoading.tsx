import { CircularProgress, Stack } from '@mui/material'

export default function PageLoading() {
  return (
    <Stack alignItems="center">
      <CircularProgress color="primary" />
    </Stack>
  )
}
