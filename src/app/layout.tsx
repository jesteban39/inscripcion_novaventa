import {Copyright} from '@/components/Copyright'
import {Footer} from '@/components/Footer'
import {NavBar} from '@/components/NavBar'
import ThemeMiuProvider from '@/providers/ThemeMui'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'inscripción Novaventa',
  description: 'Proceso de inscripción para Novaempresarios'
}

type Props = Readonly<{children: React.ReactNode}>

export default function RootLayout({children}: Props) {
  return (
    <html lang='es'>
      <body>
        <ThemeMiuProvider>
          <NavBar />
          <Paper sx={{position: 'relative', minHeight: '99vh'}}>
            <Box sx={{height: '100%', pt: '8vh'}}>
              {children}
              <Footer />
            </Box>
          </Paper>
          <Copyright />
        </ThemeMiuProvider>
      </body>
    </html>
  )
}
