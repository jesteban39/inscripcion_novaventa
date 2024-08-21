'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {useRouter} from 'next/navigation'
import {useRef, useState} from 'react'
import Webcam from 'react-webcam'

export default function Camera() {
  const webcamRef = useRef<any>(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const router = useRouter()

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Webcam
          ref={webcamRef}
          audio={false}
          width='100%'
          height={360}
          screenshotFormat='image/jpeg'
          videoConstraints={{
            width: 1280,
            height: 720,
            facingMode
          }}
        />
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
        {' '}
        <Button onClick={() => router.push('/')}>{'Home'}</Button>
      </Grid>
      <Grid item xs={12}>
        {imageSrc && <img src={imageSrc} alt='captured' />}
      </Grid>
    </Grid>
  )
}
