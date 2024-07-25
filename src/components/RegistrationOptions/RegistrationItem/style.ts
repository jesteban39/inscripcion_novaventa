import type {SxProps, Theme} from '@mui/material'

export const containerStyle: SxProps<Theme> = ({palette}) => ({
  padding: 2,
  maxWidth: 600,
  border: 'solid 0.2rem white',
  borderRadius: 3,
  backgroundColor: palette.grey['100'],
  '& .MuiGrid-container': {
    display: 'flex',
    alignItems: 'center'
  },
  '& .MuiAvatar-root': {
    width: '4.6rem',
    height: '4.6rem',
    padding: 2,
    boxShadow: `0px 0px 4px 4px ${palette.background.paper}`,
    backgroundColor: palette.background.default
  },
  '& .MuiSvgIcon-root': {
    width: '100%',
    height: '100%'
  },
  '&:hover': {
    backgroundColor: 'white',
    '& .MuiAvatar-root': {
      backgroundColor: palette.primary.main
    },
    '& .MuiSvgIcon-root': {
      color: palette.background.default
    },
    '& .MuiGrid-grid-xs-12': {
      display: 'block'
    }
  }
})
