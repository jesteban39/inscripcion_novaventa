'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {useRouter} from 'next/navigation'
import {useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam'

export default function Camera() {
  const webcamRef = useRef<any>(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('vertical')
  const [dimensions, setDimensions] = useState({
    width: 400,
    height: 700
  })
  const router = useRouter()

  const getOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) return 'horizontal'
    if (window.matchMedia('(orientation: landscape)').matches) return 'vertical'
    return window.innerWidth < window.innerHeight ? 'horizontal' : 'vertical'
  }

  useEffect(() => {
    if (orientation === 'vertical') {
      setDimensions({
        width: 400,
        height: 700
      })
    } else {
      setDimensions({
        width: 700,
        height: 300
      })
    }
  }, [orientation])

  useEffect(() => {
    setOrientation(getOrientation() === 'vertical' ? 'horizontal' : 'vertical')
    window.addEventListener('orientationchange', () => {
      setOrientation(getOrientation())
    })
  }, [])

  return (
    <Grid container spacing={1} mt={3}>
      <Grid item xs={12} mt={3}>
        <Webcam
          ref={webcamRef}
          width={dimensions.width}
          height={dimensions.height}
          audio={false}
          screenshotFormat='image/jpeg'
          videoConstraints={{
            width: dimensions.width,
            height: dimensions.height,
            facingMode
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {orientation}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button onClick={() => setImageSrc(webcamRef.current.getScreenshot())}>
          {'Capture photo'}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          onClick={() => setFacingMode((s) => (s === 'user' ? 'environment' : 'user'))}
        >
          {'Change Camera'}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button onClick={() => router.push('/')}>{'Home'}</Button>
      </Grid>
      <Grid item xs={12}>
        {imageSrc && <img src={imageSrc} alt='captured' />}
      </Grid>
    </Grid>
  )
}
