import Box from '@mui/material/Box'
import Image from 'next/image'

export function HeaderHome() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        minHeight: '20vh',
        borderRadius: '0px 0px 1rem 1rem',
        overflow: 'hidden'
      }}
    >
      <Image
        src='/images/header-home.png'
        alt='novaventa'
        style={{objectFit: 'cover'}}
        fill
      />
    </Box>
  )
}
