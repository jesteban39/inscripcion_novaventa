import {Copyright} from '@/components/Copyright'
import {Footer} from '@/components/Footer'
import {NavBar} from '@/components/NovBar'
import Box from '@mui/material/Box'
import Image from 'next/image'

export default function PageHome() {
  return (
    <main>
      <NavBar />
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '25vh',
          marginTop: 8,
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
      <Footer />
      <Copyright />
    </main>
  )
}
