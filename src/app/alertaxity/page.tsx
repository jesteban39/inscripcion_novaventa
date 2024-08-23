'use client'
import {TextField} from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {useRouter} from 'next/navigation'
import {Peer} from 'peerjs'
import {useEffect, useState} from 'react'

const peer = new Peer('alertaxity-user-id' + Date.now(), {debug: 2})

export default function Camera() {
  const router = useRouter()

  const [message, setMessage] = useState('')
  const [isConnect, setIsConnect] = useState(false)

  useEffect(() => {
    peer.on('open', () => setIsConnect(true))
    peer.on('disconnected', () => {
      setIsConnect(false)
      try {
        peer.reconnect()
      } catch (error) {
        console.error(error)
      }
    })
    peer.on('close', () => setIsConnect(false))
    peer.on('error', (error) => {
      console.error(error)
      setIsConnect(false)
    })
  }, [])

  const sendMessage = () => {
    if (peer.disconnected) peer.reconnect()
    const conn = peer.connect('EXNOJEQUINTE')
    if (!conn || !conn.on) return setIsConnect(false)
    conn.on('open', () => conn.send(message))
    conn.on('error', console.error)
  }

  return (
    <Grid container spacing={1} mt={3} p={3}>
      <Grid item xs={12}>
        <TextField onChange={({target}) => setMessage(target.value ?? '')}></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button disabled={!isConnect} onClick={sendMessage}>
          {'Send'}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button disabled={isConnect} onClick={peer.reconnect}>
          {'Reconnect'}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button onClick={() => router.push('/')}>{'Home'}</Button>
      </Grid>
    </Grid>
  )
}
