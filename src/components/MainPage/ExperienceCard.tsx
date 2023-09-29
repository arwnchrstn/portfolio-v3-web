import WorkIcon from '@mui/icons-material/Work'
import { Box, Grid, Typography } from '@mui/material'

import { TExperienceCardProps } from '@/models/TExperienceCardProps'

function ExperienceCard(props: TExperienceCardProps) {
  return (
    <Box paddingY={2}>
      <Grid
        container
        alignItems="center"
        gap={2}
        mb={props.responsibilities ? 4 : 0}
      >
        <Grid item xs={4} sm>
          {props.img && <img src={props.img} alt="sgv logo" width="100%" />}
          {!props.img && <WorkIcon sx={{ width: '100%', fontSize: 100 }} />}
        </Grid>
        <Grid item xs={12} sm={9.5}>
          <Typography variant="h6" fontWeight="bold">
            {props.companySchoolName}
          </Typography>
          <Typography color="grey" variant="subtitle1">
            {props.position}
          </Typography>
          <Typography color="grey" variant="subtitle2">
            {props.companySchoolAddr}
          </Typography>
          <Typography color="grey" variant="subtitle2">
            {props.yearOfStay.from} - {props.yearOfStay.to}
          </Typography>
        </Grid>
      </Grid>

      {props.responsibilities && (
        <>
          <Typography fontWeight="bold">Key Responsibilities:</Typography>
          <ul style={{ marginLeft: 30, fontSize: 14 }}>
            {props.responsibilities.map((r, index) => (
              <li key={index}>{r}</li>
            ))}
          </ul>
        </>
      )}
    </Box>
  )
}

export default ExperienceCard
