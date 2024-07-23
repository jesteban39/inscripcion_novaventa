import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import type {MouseEventHandler, ReactElement, ReactNode} from 'react'
import {useStyle} from './useStyle'

type Props = Readonly<{
  Icon: ReactElement
  title: string
  text: string
  onClick: MouseEventHandler
  children?: ReactNode
  testid?: string
}>

export function RegistrationItem({Icon, onClick, title, text, children, testid}: Props) {
  const {containerStyle} = useStyle()
  return (
    <Box sx={containerStyle} onClick={onClick} data-testid={testid}>
      <Grid container>
        <Grid item xs>
          <Avatar>
            <SvgIcon color='primary'>{Icon}</SvgIcon>
          </Avatar>
        </Grid>
        <Grid item xs={9} pl={1}>
          <Typography variant='title1'>{title}</Typography>
          <Typography variant='body2'>{text}</Typography>
        </Grid>
        {children && (
          <Grid item xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
