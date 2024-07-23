'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import type {MouseEventHandler, ElementType} from 'react'
import {Slide, toast} from 'react-toastify'

/**
 * Wraps a component inside a modal with the MUI theme
 * @param {Component} Element Component to render
 * @param {Object} props Props to pass to Element
 * @returns {MouseEventHandler} Function that renders the Element
 */
export const getAlertModal = (
  Element: ElementType,
  props: {[p: string]: any}
): (() => void) => {
  return () => {
    return toast(
      ({closeToast}) => (
        <Box
          sx={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            bgcolor: 'action.selected',
            py: 3,
            px: 1,
            zIndex: 20
          }}
        >
          <Element {...props} close={closeToast} />
        </Box>
      ),
      {transition: Slide}
    )
  }
}

export interface AlertErrorProps {
  title: string
  text: string
  close: MouseEventHandler
}

export const AlertError = ({title, text, close}: AlertErrorProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '50vh',
        transform: 'translate(100%, 20%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 6,
        zIndex: 10
      }}
    >
      <Grid container direction='column' padding={2} alignItems='center'>
        <Grid item>
          <></>
        </Grid>
        <Grid item>
          <Typography variant='alert1' color='primary'>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='alert2' color='secondary'>
            {text}
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={close}>{'OK'}</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

/**
 * Render an error alert
 * @param {string} title Title of the alert
 * @param {string} text Text to display in the alert
 * @returns {Function} Function that when executed renders the alert
 */
export const getAlertError = (title: string, text: string): (() => void) => {
  return getAlertModal(AlertError, {title, text})
}

/**
 * Render an error alert
 * @param {string} title Title of the alert
 * @param {string} text Text to display in the alert
 * @returns {Function} Function that when executed renders the alert
 */
export const getAlertError1 = (title: string): MouseEventHandler => {
  return () => toast.error(title)
}

/**
 * Render an error alert
 * @param {string} title Title of the alert
 * @param {string} text Text to display in the alert
 * @returns {void}
 */
export const alertError = (title: string, text: string): void => {
  getAlertModal(AlertError, {title, text})()
}
