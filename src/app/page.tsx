import {RegistrationOptions} from '@/components/RegistrationOptions'
import {HeaderHome} from '@/views/Header'
import Container from '@mui/material/Container'

export default function PageHome() {
  return (
    <Container disableGutters component='main'>
      <HeaderHome />
      <RegistrationOptions />
    </Container>
  )
}
