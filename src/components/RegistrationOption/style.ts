export const styleBox = {
  padding: 2,
  border: 'solid 0.2rem white',
  borderRadius: 3,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'rgba(247,247,247,1)',
    '& .MuiIconButton-root': {
      backgroundColor: 'rgba(22, 139, 160, 1)'
    },
    '& .MuiSvgIcon-root': {
      color: 'white'
    }
  }
}
export const sxIconButton = {
  padding: 2,
  borderRadius: '50%',
  boxShadow: '0px 0px 3px 3px rgba(238, 238, 238, 1)',
  '& .MuiSvgIcon-root': {
    fontSize: 40
  }
}
