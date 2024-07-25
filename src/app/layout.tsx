import {NavBar} from '@/components/NavBar'
import MuiProvider from '@/providers/MuiProvider'
import {ModalProvider} from '@/providers/ToastProvider'
import {Footer} from '@/views/Footer'
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
        <MuiProvider>
          <NavBar />
          <Paper sx={{minHeight: '90vh'}}>
            <Box sx={{height: '100%', paddingTop: '8vh'}}>
              <ModalProvider>{children}</ModalProvider>
            </Box>
          </Paper>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  )
}
