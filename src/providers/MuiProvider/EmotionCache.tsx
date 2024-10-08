'use client'
import React from 'react'
import createCache from '@emotion/cache'
import {useServerInsertedHTML} from 'next/navigation'
import {CacheProvider as DefaultCacheProvider} from '@emotion/react'
import type {EmotionCache, Options} from '@emotion/cache'

type CacheProviderProps = {
  options: Omit<Options, 'insertionPoint'>
  CacheProvider?: (props: {
    value: EmotionCache
    children: React.ReactNode
  }) => React.JSX.Element | null
  children: React.ReactNode
}

export function NextAppDirEmotionCacheProvider(props: CacheProviderProps) {
  const {options, CacheProvider = DefaultCacheProvider, children} = props

  const [{cache, flush}] = React.useState(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return {cache, flush}
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: names.reduce((styles, name) => styles + cache.inserted[name], '')
        }}
      />
    )
  })
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
