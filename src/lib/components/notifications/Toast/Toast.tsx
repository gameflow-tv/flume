import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { StyledToast } from './Toast.styles'

export type ToastProps = {
  children?: ReactNode
  horizontalAlign?: 'left' | 'middle' | 'right'
  verticalAlign?: 'top' | 'middle' | 'bottom'
  width?: string
  zIndex?: number
  animation?: {
    slideInTime?: number
    slideOutTime?: number
    visibilityTime?: number
  }
}

export const Toast = forwardRef((props: ToastProps, ref) => {
  const [show, setShow] = useState(false)

  const styles = {
    horizontalAlign: props.horizontalAlign || 'middle',
    verticalAlign: props.verticalAlign || 'top',
    width: props.width || '220px',
    zIndex: props.zIndex,
    animation: {
      slideInTime: props.animation?.slideInTime || 0.5,
      slideOutTime: props.animation?.slideOutTime || 0.5,
      visibilityTime: props.animation?.visibilityTime || 2
    }
  }

  useImperativeHandle(ref, () => ({
    dispatchShow() {
      const { animation } = styles

      setShow(true)
      setTimeout(function () {
        setShow(false)
      }, (animation.slideInTime + animation.slideOutTime + animation.visibilityTime) * 1000)
    }
  }))

  return (
    <StyledToast {...styles} className={show && 'show'}>
      {props.children}
    </StyledToast>
  )
})
