'use client'
import {NextAppDirEmotionCacheProvider} from '@/providers/ThemeMui/EmotionCache'
import {themeOptions} from '@/providers/ThemeMui/themeOptions'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import React from 'react'
import {ToastContainer} from 'react-toastify'

export const theme = createTheme(themeOptions)

type Props = Readonly<{children: React.ReactNode}>

export default function ThemeMiuProvider({children}: Props) {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer style={{height: '0px'}} />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
