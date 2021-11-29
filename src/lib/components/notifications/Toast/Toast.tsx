import React, { ReactNode } from 'react'
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

export const Toast = (props: ToastProps) => {
  const styles = {
    horizontalAlign: props.horizontalAlign || 'middle',
    verticalAlign: props.verticalAlign || 'top',
    width: props.width || '270px',
    zIndex: props.zIndex,
    animation: {
      slideInTime: props.animation?.slideInTime || 0.5,
      slideOutTime: props.animation?.slideOutTime || 0.5,
      visibilityTime: props.animation?.visibilityTime || 2
    }
  }

  return <StyledToast {...styles}>{props.children}</StyledToast>
}
