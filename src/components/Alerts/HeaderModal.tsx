'use client'
import IconClose from '@media/icons/close.svg'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import type {MouseEventHandler, ReactElement} from 'react'

type HeaderModalProps = {
  onClose: MouseEventHandler
  Icon: ReactElement
  title: string
}

/**
 *
 * @param {HeaderModalProps} contentProps
 * @returns
 */
export const HeaderModal = ({onClose, Icon, title}: HeaderModalProps) => (
  <Grid container sx={{display: 'flex', padding: 1.5, justifyContent: 'space-between'}}>
    <Grid item xs={'auto'}>
      <SvgIcon color='primary'>{Icon}</SvgIcon>
    </Grid>
    <Grid item xs={true}>
      <Typography variant='title1' pl={2}>
        {title}
      </Typography>
    </Grid>
    <Grid item xs={'auto'}>
      <IconButton sx={{padding: 0}} onClick={onClose}>
        <SvgIcon sx={{fontSize: 28}} color='primary'>
          <IconClose />
        </SvgIcon>
      </IconButton>
    </Grid>
  </Grid>
)
