import { Box, Grid, Link, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { TCertificates } from '@/models/TCertificates'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function CertificateCard(props: TCertificates) {
  const { isSmallestScreen } = useIsSmallScreen()
  return (
    <Box paddingY={1}>
      <Grid container alignItems="center" gap={2}>
        {!isSmallestScreen && (
          <Grid item xs={4} sm>
            <EmojiEventsIcon sx={{ width: '100%', fontSize: 100 }} />
          </Grid>
        )}
        <Grid item xs={12} sm={9.5} gap={1}>
          <Typography variant="h6" fontWeight="bold">
            {props.title}
          </Typography>
          <Typography color="grey" variant="subtitle1">
            {props.learningPlatform}
          </Typography>

          <Link
            onClick={() => window.open(props.link)}
            sx={{ cursor: 'pointer' }}
            underline="none"
          >
            View Certificate
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CertificateCard
