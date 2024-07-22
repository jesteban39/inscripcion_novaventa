import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export function Copyright() {
  return (
    <Box
      component='footer'
      sx={{
        p: 1,
        mt: 'auto',
        height: '6vh'
      }}
    >
      <Typography variant='body2' color='text.secondary'>
        <Link color='inherit' href='https://novaventa.com/'>
          {' © Novaventa S.A.S '}
        </Link>
        {'Todos los derechos reservados'}
      </Typography>
    </Box>
  )
}
