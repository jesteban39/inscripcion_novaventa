'use client'
import Box from '@mui/material/Box'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {styleContainer} from './style'

type ToastProviderProps = Readonly<{
  children: React.ReactNode
}>

export default function ToastProvider({children}: ToastProviderProps) {
  return (
    <Box sx={styleContainer}>
      {children}
      <ToastContainer />
    </Box>
  )
}
