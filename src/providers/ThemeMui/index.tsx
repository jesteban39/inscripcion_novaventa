'use client'
import {NextAppDirEmotionCacheProvider} from '@/providers/ThemeMui/EmotionCache'
import {themeOptions} from '@/providers/ThemeMui/themeOptions'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import React from 'react'

const theme = createTheme(themeOptions)

export default function ThemeMiuProvider({
  children
}: Readonly<{children: React.ReactNode}>) {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
