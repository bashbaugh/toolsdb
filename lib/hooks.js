import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@geist-ui/react'

export function useIsSmallScreen () {
  const [isSmall, setSmall] = useState(false)
  let isSmallHookVal = useMediaQuery('sm', { match: 'down' })

  // We must do this to propogate the screen size throughout components on mount, or else they will initially use the server-computed value
  useEffect(() => {
    setSmall(isSmallHookVal)
  }, [])

  return isSmall
}
