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

export function useWindowDimensions(): WindowDimensions | undefined {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions(): WindowDimensions | undefined {
    if (hasWindow) {
      const rootFontSize = parseInt(getComputedStyle(document.documentElement).fontSize)

      const dimensions: WindowDimensions = {
        width: {
          px: window.innerWidth,
          rem: window.innerWidth / rootFontSize
        },

        height: {
          px: window.innerHeight,
          rem: window.innerHeight / rootFontSize
        }
      }

      return dimensions
    } else {
      return undefined
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  function handleResize() {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow])

  return windowDimensions
}
