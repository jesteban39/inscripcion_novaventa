'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

export function NavBar() {
  return (
    <AppBar data-testid='navBar'>
      <Toolbar>
        <Image src='/icons/novaventa.svg' alt='novaventa' fill />
      </Toolbar>
    </AppBar>
  );
}
