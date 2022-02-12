import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { useTheme } from '../../../hooks'
import { StyledToast } from './Toast.styles'

export type ToastProps = {
  children?: ReactNode
  horizontalAlign?: 'left' | 'middle' | 'right'
  verticalAlign?: 'top' | 'middle' | 'bottom'
  width?: string
  zIndex?: number
  backgroundColor?: string
  duration?: number
  animation?: {
    slideInTime?: number
    slideOutTime?: number
  }
}

export const Toast = forwardRef((props: ToastProps, ref) => {
  const [show, setShow] = useState(false)
  const theme = useTheme()

  const styles = {
    horizontalAlign: props.horizontalAlign || 'middle',
    verticalAlign: props.verticalAlign || 'top',
    width: props.width || '220px',
    zIndex: props.zIndex || 99,
    backgroundColor: props.backgroundColor || theme.colors.toggle,
    duration: props.duration || 2000,
    animation: {
      slideInTime: props.animation?.slideInTime || 500,
      slideOutTime: props.animation?.slideOutTime || 500
    }
  }

  useImperativeHandle(ref, () => ({
    show() {
      setShow(true)
      setTimeout(function () {
        setShow(false)
      }, styles.animation.slideInTime + styles.animation.slideOutTime + styles.duration)
    }
  }))

  return (
    <StyledToast {...styles} className={show && 'show'}>
      {props.children}
    </StyledToast>
  )
})
