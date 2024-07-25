import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const texts = {
  title: 'Comunicate ya para que inisiemos tu inscripcion',
  body: 'Comunicate con nuestra linea de atencion y un asesor te ayudara a completar tu inscripcion',
  input: {label: 'Elige tu ciudad', placeholder: 'Ejm. Medellín', options: []},
  title2: 'Horario de atencion',
  body2: 'De lunar a viernes de 7:30 a.m a 10:00 p.m. y sabados de 8:00 a.m. a 6:00 p.m.'
}

export function CallUs() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='title1' component='p'>
          {texts.title}
        </Typography>
        <Typography variant='body1' component='p'>
          {texts.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='label'>{texts.input.label}</Typography>
        <Typography variant='title1'>{texts.input.placeholder}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='label'>{texts.title}</Typography>
        <Typography variant='title1'>{texts.title}</Typography>
      </Grid>
    </Grid>
  )
}
