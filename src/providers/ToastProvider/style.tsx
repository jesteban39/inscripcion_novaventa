import type {SxProps, Theme} from '@mui/material'

/**
 * disable toastify responsive
 */
export const styleContainer: SxProps<Theme> = ({palette}) => ({
  '& .Toastify__toast-container': {
    backgroundColor: palette.action.disabledBackground,
    width: '100vw',
    minHeight: '100vh',
    paddingX: 2,
    paddingTop: '9vh',
    top: 0
  },
  '& .Toastify__toast': {
    padding: 0,
    borderRadius: 3
  },
  '& .Toastify__toast-body': {
    padding: 0
  }
})
