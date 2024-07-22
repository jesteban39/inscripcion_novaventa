'use client'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'

export default function Palette() {
  const {palette} = useTheme()
  const entries = Object.entries(palette)
  const paletteColors = entries.filter(
    ([_, optionColor]) => typeof optionColor === 'object'
  )
  const paletteText = entries.filter(
    ([_, optionColor]) =>
      typeof optionColor !== 'object' && typeof optionColor !== 'function'
  )

  return (
    <Container component='main' sx={{backgroundColor: 'white'}}>
      <Grid container spacing={0} padding={3}>
        <Grid container spacing={0}>
          <Typography variant='h2'>Palette de MUI</Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid container spacing={1}>
            {paletteText.map(([name, value], idx) => {
              return (
                <Grid key={idx} item xs={12}>
                  <Typography variant='h4'>{name + ': ' + value}</Typography>
                </Grid>
              )
            })}
          </Grid>
          <Typography variant='h2'>Colors MUI</Typography>
          <Grid key={'divider'} container spacing={1}>
            <Grid item xs={12}>
              <Typography variant='h4'>divider</Typography>
            </Grid>
            <Grid key={'color'} item xs={6} sm={4} md={3}>
              <Box
                height='100px'
                bgcolor={palette.divider}
                border='solid 1px black'
              ></Box>
              <Typography variant='h6'>{palette.divider}</Typography>
            </Grid>
          </Grid>
          {paletteColors.map(([colorName, values], idx) => {
            return (
              <Grid key={idx} container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant='h4'>{colorName}</Typography>
                </Grid>
                {Object.entries(values).map(([name, color], idx) => {
                  return (
                    <Grid key={idx} item xs={6} sm={4} md={3}>
                      <Typography variant='h6'>{name}</Typography>
                      <Box
                        height='100px'
                        bgcolor={String(color)}
                        border='solid 1px black'
                      ></Box>
                      <Typography variant='h6'>{String(color)}</Typography>
                    </Grid>
                  )
                })}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}
