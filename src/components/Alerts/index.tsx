import {Paper} from '@mui/material'
import type {ElementType, ReactElement} from 'react'
import type {Id, ToastOptions} from 'react-toastify'
import {Slide, toast} from 'react-toastify'
import {HeaderModal} from './HeaderModal'

export const defaultToastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  closeButton: false,
  pauseOnHover: false,
  progress: undefined,
  theme: 'light',
  transition: Slide
}

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

type headerProps = Partial<any> & {
  Icon: ReactElement
  title: string
}

/**
 * Display toast
 *
 * @param {ElementType} Content
 * @param {headerProps} contentProps
 * @param {ToastOptions} options
 * @return {Id}
 */
export const showToast = (
  Content: ElementType,
  contentProps: headerProps,
  options: Partial<ToastOptions> = {}
): Id => {
  const {Icon, title} = contentProps
  return toast(
    ({closeToast}) => (
      <>
        <HeaderModal onClose={closeToast} Icon={Icon} title={title} />
        <Paper sx={{padding: 2}}>
          <Content {...contentProps} close={closeToast} />
        </Paper>
      </>
    ),
    {...defaultToastOptions, ...options}
  )
}
