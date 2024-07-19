'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {NextAppDirEmotionCacheProvider} from './EmotionCache';
import {themeOptions} from './themeOptions';

const theme = createTheme(themeOptions);

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
  );
}
