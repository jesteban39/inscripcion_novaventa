import {toast, ToastContent, ToastOptions, Slide, Id} from 'react-toastify'

export const defaultToastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  closeButton: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide
}

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = {...defaultToastOptions, ...options}
  return toast(content, optionsToApply)
}
