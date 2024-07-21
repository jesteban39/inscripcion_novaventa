import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'

export function NavBar() {
  return (
    <AppBar data-testid='navBar' sx={{minHeight: '9vh', paddingX: 3}}>
      <Toolbar>
        <Image src='/icons/novaventa-white.svg' alt='novaventa' fill />
      </Toolbar>
    </AppBar>
  )
}
