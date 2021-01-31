import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@geist-ui/react'
import { useRouter } from 'next/router'

export function useIsSmallScreen () {
  const [isSmall, setSmall] = useState(true)
  let isSmallHookVal = useMediaQuery('sm', { match: 'down' })

  // We must do this to propogate the screen size throughout components on mount, or else they will initially use the server-computed value
  useEffect(() => {
    setSmall(isSmallHookVal)
  }, [isSmallHookVal])

  return isSmall
}

export function useRefreshAfterLoad () {
  const router = useRouter()
  useEffect(() => { // Only run client-side
    setTimeout(_ => router.replace(router.asPath), 1010)

    // router.events.on('routeChangeComplete', _ => {
    //   setTimeout(url => router.replace(router.asPath), 1010)
    // }) // results in infinite loop
  }, [])
}
