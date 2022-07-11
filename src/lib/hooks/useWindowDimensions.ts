import { useState, useEffect } from 'react'

export type WindowDimensions = {
  width: {
    px: number
    rem: number
  }
  height: {
    px: number
    rem: number
  }
}

function getWindowDimensions(): WindowDimensions {
  const width = window?.innerWidth || 0
  const height = window?.innerHeight || 0

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
