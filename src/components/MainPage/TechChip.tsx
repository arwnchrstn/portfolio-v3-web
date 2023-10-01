import { Chip } from '@mui/material'

function TechChip({ text }: { text: string }) {
  return (
    <Chip
      label={text}
      variant="filled"
      color="primary"
      size="medium"
      sx={{ margin: 0.5 }}
    />
  )
}

export default TechChip
