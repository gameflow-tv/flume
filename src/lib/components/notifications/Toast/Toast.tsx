import React, { ReactNode } from 'react'
import { StyleToast } from './Toast.styles'

export type ToastProps = {
  children?: ReactNode
  horizontalAlign?: 'left' | 'middle' | 'right'
  verticalAlign?: 'top' | 'middle' | 'bottom'
  animation?: {
    slideMovement?: 'fromTop' | 'fromBottom' | 'fromLeft' | 'fromRight'
    slideInTime?: number
    slideOutTime?: number
    visibilityTime?: number
  }
}

export const Toast = (props: ToastProps) => {
  const styles = {
    horizontalAlign: props.horizontalAlign || 'middle',
    verticalAlign: props.verticalAlign || 'top',
    animation: {
      slideMovement: props.animation?.slideMovement || 'fromTop',
      slideInTime: props.animation?.slideInTime || 0.5,
      slideOutTime: props.animation?.slideOutTime || 0.5,
      visibilityTime: props.animation?.visibilityTime || 2
    }
  }

  return <StyleToast {...styles}>{props.children}</StyleToast>
}
