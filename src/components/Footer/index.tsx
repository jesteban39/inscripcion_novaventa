import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'

const sxBox = {
  position: 'relative',
  width: '100%',
  height: 30,
  padding: 0,
  borderRadius: '0px 0px 1rem 1rem',
  overflow: 'hidden'
}

export function Footer() {
  return (
    <Grid
      component='footer'
      container
      sx={{
        position: 'absolute',
        height: 40,
        bottom: 1,
        padding: 1,
        borderRadius: '1rem',
        backgroundColor: 'white'
      }}
    >
      <Grid item xs={6}>
        <Box sx={sxBox}>
          <Image src='/icons/novaventa-grey.svg' alt='novaventa' fill />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={sxBox}>
          <Image src='/icons/nutresa-grey.svg' alt='nutresa' fill />
        </Box>
      </Grid>
    </Grid>
  )
}
