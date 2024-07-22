'use client'
import {RegistrationItem} from '@/components/RegistrationOptions/RegistrationItem'
import IconDesktop from '@media/icons/desktop.svg'
import IconPhone from '@media/icons/phone.svg'
import Grid from '@mui/material/Grid'

export const RegistrationOptions = () => {
  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12}>
        <RegistrationItem
          Icon={<IconDesktop />}
          onClick={() => {}}
          title='En linea'
          text='Registrate facilmete a través de un formulario en linea.'
        />
      </Grid>
      <Grid item xs={12}>
        <RegistrationItem
          Icon={<IconPhone />}
          onClick={() => {}}
          title='Por telefono'
          text='Registrate con un ascesor que te guiara el el proceso de inscripsion.'
        />
      </Grid>
    </Grid>
  )
}
