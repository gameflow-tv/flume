import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const refContainsTarget = (ref: React.RefObject<HTMLElement>, target: EventTarget) => {
  return target instanceof HTMLElement && !ReactDOM.findDOMNode(ref.current).contains(target)
}

/** Calls the `callback` function when a click event occurs outside the given `ref`'s element */
export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refContainsTarget(ref, event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}
