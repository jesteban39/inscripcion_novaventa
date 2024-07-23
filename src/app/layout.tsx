import {Footer} from '@/views/Footer'
import {NavBar} from '@/components/NavBar'
import MuiProvider from '@/providers/MuiProvider'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import type {Metadata} from 'next'
import ToastProvider from '@/providers/ToastProvider'

export const metadata: Metadata = {
  title: 'inscripción Novaventa',
  description: 'Proceso de inscripción para Novaempresarios'
}

type Props = Readonly<{children: React.ReactNode}>

export default function RootLayout({children}: Props) {
  return (
    <html lang='es'>
      <body>
        <MuiProvider>
          <NavBar />
          <Paper sx={{minHeight: '90vh'}}>
            <Box sx={{height: '100%', paddingTop: '8vh'}}>
              <ToastProvider>{children}</ToastProvider>
            </Box>
          </Paper>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  )
}
