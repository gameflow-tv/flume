import { useState, useEffect } from 'react'

export interface WindowDimensions {
  width: {
    px: number
    rem: number
  }
  height: {
    px: number
    rem: number
  }
}

const getWindowDimensions = (): WindowDimensions => {
  let width = 0
  let height = 0

  if (typeof window !== 'undefined') {
    width = window?.innerWidth
    height = window?.innerHeight
  }

  const rootFontSize = parseInt(getComputedStyle(document?.documentElement)?.fontSize) ?? 16

  return {
    width: {
      px: width,
      rem: width / rootFontSize,
    },
    height: {
      px: height,
      rem: height / rootFontSize,
    },
  }
}

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
