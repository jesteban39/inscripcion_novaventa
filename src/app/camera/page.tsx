'use client'

import {useRef, useState} from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 1280,
  height: 720
}

export default function Camera() {
  const webcamRef = useRef<any>(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')

  return (
    <div>
      <div>
        <Webcam
          ref={webcamRef}
          audio={false}
          height={360}
          screenshotFormat='image/jpeg'
          width={720}
          videoConstraints={{
            ...videoConstraints,
            facingMode
          }}
        />
        <button>
          <div
            onClick={() => {
              const imageSrc = webcamRef.current.getScreenshot()
              setImageSrc(imageSrc)
            }}
          >
            Capture photo
          </div>
        </button>
        <button
          onClick={() => {
            setFacingMode(facingMode === 'user' ? 'environment' : 'user')
          }}
        >
          Change Camera
        </button>
      </div>

      {imageSrc && <img src={imageSrc} alt='captured' />}
    </div>
  )
}
