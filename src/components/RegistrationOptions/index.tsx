'use client'
import {RegistrationItem} from '@/components/RegistrationOptions/RegistrationItem'
import {showModal} from '@/providers/ToastProvider'
import IconDesktop from '@media/icons/desktop.svg'
import IconPhone from '@media/icons/phone.svg'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {MouseEventHandler, useState} from 'react'

const CallUs = () => <>content call us</>
const WeCallYou = () => <>content We Call You</>

const alertCallUs: MouseEventHandler = (e) => {
  e.stopPropagation()
  showModal(CallUs, {
    Icon: <IconPhone />,
    title: 'Llámanos'
  })
}
const alertWeCallYou: MouseEventHandler = (e) => {
  e.stopPropagation()
  showModal(WeCallYou, {
    Icon: <IconPhone />,
    title: 'Llámanos'
  })
}

export const RegistrationOptions = () => {
  const [showAction, setShowAction] = useState(false)

  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12} md={6}>
        <RegistrationItem
          testid='option1'
          Icon={<IconDesktop />}
          onClick={() => {
            setShowAction(false)
          }}
          title='En línea'
          text='Registrate facilmete a través de un formulario en linea.'
        />
      </Grid>
      <Grid item xs={12} md={6}>
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
                <Button data-testid='action1' onClick={alertWeCallYou}>
                  {'Te llamamos'}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button data-testid='action2' onClick={alertCallUs}>
                  {'Llámanos'}
                </Button>
              </Grid>
            </Grid>
          )}
        </RegistrationItem>
      </Grid>
    </Grid>
  )
}
