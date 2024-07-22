import {HeaderHome} from '@/components/Header'
import {RegistrationOption} from '@/components/RegistrationOption'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconPhone from '@media/icons/phone.svg'
import IconDesktop from '@media/icons/desktop.svg'

export default function PageHome() {
  return (
    <Container disableGutters component='main'>
      <HeaderHome />
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12}>
          <RegistrationOption
            Icon={<IconDesktop />}
            onClick={() => {}}
            title='En linea'
            text='Registrate facilmete a través de un formulario en linea.'
          />
        </Grid>
        <Grid item xs={12}>
          <RegistrationOption
            Icon={<IconPhone />}
            onClick={() => {}}
            title='Por telefono'
            text='Registrate con un ascesor que te guiara el el proceso de inscripsion.'
          />
        </Grid>
      </Grid>
    </Container>
  )
}
