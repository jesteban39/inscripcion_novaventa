import {HeaderHome} from '@/components/Header'
import {RegistrationOptions} from '@/components/RegistrationOptions'
import Container from '@mui/material/Container'

export default function PageHome() {
  return (
    <Container disableGutters component='main'>
      <HeaderHome />
      <RegistrationOptions />
    </Container>
  )
}
