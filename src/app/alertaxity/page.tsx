'use client'
import {Box, TextField, Typography} from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {useRouter} from 'next/navigation'
import {Peer} from 'peerjs'
import {useEffect, useState} from 'react'

const peerId = 'alertaxity-user-id' + Date.now()

const peer = new Peer(peerId, {debug: 2})

type MessageStatus = 'none' | 'offline' | 'sent' | 'inline' | 'received' | 'error'

type Reader = {
  peerId: string
  name: string
  status: MessageStatus
}

const readers = [
  {
    peerId: 'EXNOJEQUINTE',
    name: 'Esteban Quintero',
    status: 'offline'
  }
]

/**
 * Enviar alertas a empleados axity.
 * @returns
 */
export default function Alertaxity() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [isConnect, setIsConnect] = useState(false)
  const [messageStatus, setMessageStatus] = useState<MessageStatus>('none')

  useEffect(() => {
    peer.on('open', () => setIsConnect(true))
    peer.on('disconnected', () => {
      setIsConnect(false)
      try {
        peer.reconnect()
      } catch (error) {
        setIsConnect(false)
        console.error(error)
      }
    })
    peer.on('close', () => setIsConnect(false))
    peer.on('error', (error) => {
      setIsConnect(false)
      console.error(error)
    })
  }, [])

  const sendMessage = async () => {
    if (peer.disconnected) {
      setIsConnect(false)
      setMessageStatus('offline')
      try {
        peer.reconnect()
      } catch (error) {
        console.error(error)
        setMessageStatus('error')
      }
      return
    }

    readers.forEach(({peerId: reader}) => {
      try {
        const conn = peer.connect(reader)
        if (!conn || !conn.on) return
        conn.on('open', () => {
          setMessageStatus('sent')
          conn.send({
            sender: peerId,
            message: message,
            messageId: Date.now(),
            type: 'new-message',
            date: Date.now()
          })
        })
        conn.on('open', () => {
          setMessageStatus('inline')
        })
        conn.on('data', (payload) => {
          setMessageStatus('received')
        })
        conn.on('error', () => {
          setMessageStatus('error')
          console.error()
        })
      } catch (error) {
        console.error(error)
        setMessageStatus('error')
      }
    })
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
        <Button
          disabled={isConnect}
          onClick={() => {
            try {
              setIsConnect(true)
              peer.reconnect()
            } catch (error) {
              setIsConnect(false)
              console.error(error)
            }
          }}
        >
          {'Reconnect'}
        </Button>
      </Grid>
      <Grid item xs={12}>
        {readers.map((reader) => {
          return (
            <Box key={reader.peerId}>
              <Typography>{reader.name}</Typography>
              <Typography>{messageStatus}</Typography>
            </Box>
          )
        })}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button onClick={() => router.push('/')}>{'Home'}</Button>
      </Grid>
    </Grid>
  )
}
