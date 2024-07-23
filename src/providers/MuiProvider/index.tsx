'use client'
import {NextAppDirEmotionCacheProvider} from '@/providers/MuiProvider/EmotionCache'
import {themeOptions} from '@/providers/MuiProvider/themeOptions'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import React from 'react'

export const theme = createTheme(themeOptions)

type Props = Readonly<{children: React.ReactNode}>

export default function MuiProvider({children}: Props) {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
