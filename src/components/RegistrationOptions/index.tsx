'use client'
import {RegistrationItem} from '@/components/RegistrationOptions/RegistrationItem'
import IconDesktop from '@media/icons/desktop.svg'
import IconPhone from '@media/icons/phone.svg'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {useState} from 'react'

export const RegistrationOptions = () => {
  const [showAction, setShowAction] = useState(false)
  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12}>
        <RegistrationItem
          testid='option1'
          Icon={<IconDesktop />}
          onClick={() => {
            setShowAction(false)
          }}
          title='En linea'
          text='Registrate facilmete a través de un formulario en linea.'
        />
      </Grid>
      <Grid item xs={12}>
        <RegistrationItem
          testid='option2'
          Icon={<IconPhone />}
          onClick={() => {
            setShowAction((s) => !s)
          }}
          title='Por telefono'
          text={
            showAction
              ? 'Registrate con un asesor'
              : 'Registrate con un ascesor que te guiara el el proceso de inscripsion.'
          }
        >
          {showAction && (
            <Grid container mt={1} spacing={1}>
              <Grid item xs={6}>
                <Button onClick={(e) => e.stopPropagation()}>{'Te llamamos'}</Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={(e) => e.stopPropagation()}>{'Llámanos'}</Button>
              </Grid>
            </Grid>
          )}
        </RegistrationItem>
      </Grid>
    </Grid>
  )
}
