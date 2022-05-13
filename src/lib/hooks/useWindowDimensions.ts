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

/** Returns the current window dimensions in `px` and `rem` */
export const getWindowDimensions = (): WindowDimensions => {
  if (typeof global?.document === 'undefined' || typeof global?.window === 'undefined') {
    return null
  }

  const { innerWidth: width, innerHeight: height } = window
  let rootFontSize = 16

  if (parseInt(getComputedStyle(document.documentElement).fontSize)) {
    rootFontSize = parseInt(getComputedStyle(document.documentElement).fontSize)
  }

  return {
    width: {
      px: width,
      rem: width / rootFontSize
    },
    height: {
      px: height,
      rem: height / rootFontSize
    }
  }
}

/** Returns the current window dimensions in `px` and `rem` */
export const useWindowDimensions = (): WindowDimensions | null => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(null)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    // Resize as soon as component mounts
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
