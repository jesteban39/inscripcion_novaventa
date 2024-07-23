import type {ThemeOptions} from '@mui/material/styles'
import {Roboto, Inter} from 'next/font/google'

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    miColor?: {
      main: string
    }
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true
    alert1: true
    alert2: true
    label: true
    rule: true
  }
}

declare module '@mui/material/Button/Button' {
  interface ButtonPropsVariantOverrides {
    file: true
  }
}

const fontRoboto = Roboto({
  weight: ['500', '100', '700', '300'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

const fontInter = Inter({subsets: ['latin']})

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: 'rgba(22, 139, 160, 1)'
    },
    secondary: {
      main: 'rgba(71, 187, 59, 1)'
    },
    success: {
      main: 'rgba(6, 213, 172, 1)'
    },
    warning: {
      main: 'rgba(255, 131, 42, 1)'
    },
    error: {
      main: 'rgba(244, 54, 76, 1)'
    },
    background: {
      paper: 'rgba(238, 238, 238, 1)'
    }
  },
  typography: {
    fontSize: 15,
    fontFamily: fontRoboto.style.fontFamily,
    subtitle1: {fontSize: '23px', fontWeight: 500},
    subtitle2: {fontSize: '16px', fontWeight: 400}
  },
  components: {
    MuiTypography: {
      // styleOverrides: {
      //   root: ({theme: {palette}}) => ({
      //     color: palette.text.secondary
      //   })
      // },
      variants: [
        // {
        //   props: {variant: 'title1'},
        //   style: ({theme: {palette}}) => ({
        //     color: palette.primary.main,
        //     fontFamily: '"darkmode-on", sans-serif',
        //     fontSize: 26,
        //     fontWeight: 400,
        //     fontStyle: 'normal'
        //   })
        // },
        {
          props: {variant: 'alert1'},
          style: {
            fontSize: '23px',
            fontWeight: 500
          }
        },
        {
          props: {variant: 'alert2'},
          style: {
            fontFamily: fontInter.style.fontFamily,
            fontSize: '16px',
            fontWeight: 600
          }
        }
        // {
        //   props: {variant: 'rule'},
        //   style: ({theme: {palette}}) => ({
        //     color: palette.success.main,
        //     fontSize: '16px',
        //     fontWeight: 400
        //   })
        // },
        // {
        //   props: {variant: 'label'},
        //   style: () => ({
        //     fontFamily: roboto.style.fontFamily,
        //     marginLeft: 6,
        //     fontSize: 14,
        //     lineHeight: 0.9,
        //     minHeight: '2rem',
        //     fontWeight: 600
        //   })
        // }
      ]
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        fullWidth: true
      },
      styleOverrides: {
        root: () => ({
          textTransform: 'none',
          borderRadius: '2em',
          padding: 3
        })
      },
      variants: [
        // {
        //   props: {variant: 'file'},
        //   style: ({theme: {palette}}) => ({
        //     border: `solid 1px ${palette.action.disabled}`,
        //     '&:hover': {bc: 'none'}
        //   })
        // }
      ]
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        fullWidth: true
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: () => ({
          borderRadius: '0px 0px 1rem 1rem',
          paddingTop: 6
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: () => ({
          boxShadow: 'none',
          borderRadius: 0
        })
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true
      }
      // styleOverrides: {
      //   root: ({theme: {palette}}) => ({
      //     color: palette.text.primary
      //   })
      // }
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
        style: {marginTop: '2rem'}
      }
    },
    MuiInputBase: {
      // styleOverrides: {
      //   root: ({theme: {palette}}) => ({
      //     color: palette.text.secondary,
      //     border: `solid 1px ${palette.action.disabled}`,
      //     borderRadius: '1.3rem',
      //     backgroundColor: palette.common.white,
      //     minHeight: '2.3rem',
      //     padding: '0 0.2rem',
      //     overflowX: 'hidden',
      //     overflowY: 'auto'
      //   })
      // }
    }
  }
}
