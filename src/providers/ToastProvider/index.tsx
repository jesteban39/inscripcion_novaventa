'use client'

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({children}: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        toastClassName='bg-blue-600 relative flex justify-center overflow-hidden'
        bodyClassName='text-sm font-white font-med block'
      />
    </>
  )
}
