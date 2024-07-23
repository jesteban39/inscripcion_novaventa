import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
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
    <Box component='footer' bgcolor='background.paper'>
      <Grid
        container
        sx={{
          height: 40,
          padding: 1,
          marginBottom: '2px',
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
      <Box
        component='footer'
        sx={{
          padding: 1,
          height: '6vh',
          backgroundColor: 'white'
        }}
      >
        <Typography variant='body2' align='center' color='text.secondary'>
          <Link href='https://novaventa.com/'>{' © Novaventa S.A.S '}</Link>
          {'Todos los derechos reservados'}
        </Typography>
      </Box>
    </Box>
  )
}
