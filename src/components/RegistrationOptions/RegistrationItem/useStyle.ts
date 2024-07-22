import {useTheme} from '@mui/material/styles'

export const useStyle = () => {
  const {palette} = useTheme()
  const containerStyle = {
    padding: 2,
    border: 'solid 0.2rem white',
    borderRadius: 3,
    backgroundColor: 'white',
    '& .MuiGrid-container': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .MuiAvatar-root': {
      width: '4.6rem',
      height: '4.6rem',
      padding: 2,
      boxShadow: `0px 0px 3px 3px ${palette.background.paper}`,
      backgroundColor: palette.background.default
    },
    '& .MuiSvgIcon-root': {
      width: '100%',
      height: '100%'
    },
    '&:hover': {
      backgroundColor: palette.grey['100'],
      '& .MuiAvatar-root': {
        backgroundColor: palette.primary.main
      },
      '& .MuiSvgIcon-root': {
        color: palette.background.default
      }
    }
  }
  return {containerStyle}
}
