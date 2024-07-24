'use client'
import type {SxProps, Theme} from '@mui/material'
import Box from '@mui/material/Box'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * disable toastify responsive
 */
const styleBox: SxProps<Theme> = {
  '& .Toastify__toast-container': {
    backgroundColor: 'rgba(15, 97, 112, 0.5)',
    width: '100vw',
    minHeight: '100vh',
    paddingX: 2,
    paddingTop: '9vh',
    top: 0
  },
  '& .Toastify__toast': {
    borderRadius: 3
  }
}

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({children}: ToastProviderProps) {
  return (
    <Box sx={styleBox}>
      {children}
      <ToastContainer
      //toastClassName='bg-blue-600 relative flex justify-center overflow-hidden'
      //bodyClassName='text-sm font-white font-med block'
      />
    </Box>
  )
}
