'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {useRouter} from 'next/navigation'
import {useRef, useState} from 'react'
import Webcam from 'react-webcam'

export default function Camera() {
  const webcamRef = useRef<any>(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const router = useRouter()

  return (
    <Box>
      <Box>
        <Webcam
          ref={webcamRef}
          audio={false}
          width='90%'
          height={360}
          screenshotFormat='image/jpeg'
        />
        <Button>
          <Box
            onClick={() => {
              const imageSrc = webcamRef.current.getScreenshot()
              setImageSrc(imageSrc)
            }}
          >
            Capture photo
          </Box>
        </Button>
        <Button
          onClick={() => {
            setFacingMode(facingMode === 'user' ? 'environment' : 'user')
          }}
        >
          Change Camera
        </Button>
        <Button onClick={() => router.push('/')}>{'Home'}</Button>
      </Box>
      {imageSrc && <img src={imageSrc} alt='captured' />}
    </Box>
  )
}
