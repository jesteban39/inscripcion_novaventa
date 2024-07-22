import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import type {ReactElement, MouseEventHandler} from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import {styleBox, sxIconButton} from './style'

type Props = {
  title: string
  text: string
  Icon: ReactElement
  onClick: MouseEventHandler
}

export function RegistrationOption({Icon, onClick, title, text}: Props) {
  return (
    <Box sx={styleBox} onClick={onClick} data-testid='RegistrationOption'>
      <Grid container>
        <Grid item xs>
          <IconButton sx={sxIconButton}>
            <SvgIcon color='primary'>{Icon}</SvgIcon>
          </IconButton>
        </Grid>
        <Grid item xs={9} pl={1}>
          <Typography variant='title1'>{title}</Typography>
          <Typography variant='body2'>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
