import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { useAmbiance, useTheme } from '../../../hooks'
import { StyledToast } from './Toast.styles'

export type VerticalAlignment = 'top' | 'center' | 'bottom'
export type HorizontalAlignment = 'left' | 'center' | 'right'

export type ToastProps = {
  children?: ReactNode
  horizontalAlign?: HorizontalAlignment
  verticalAlign?: VerticalAlignment
  width?: string
  zIndex?: number
  background?: string
  duration?: number
}

export const Toast = forwardRef(
  (
    {
      children,
      horizontalAlign,
      verticalAlign,
      width,
      zIndex,
      background,
      duration = 2000
    }: ToastProps,
    ref
  ) => {
    const [show, setShow] = useState(false)
    const ambiance = useAmbiance()

    useImperativeHandle(ref, () => ({
      show() {
        setShow(true)
        setTimeout(function () {
          setShow(false)
        }, 1000 + duration)
      }
    }))

    return (
      <StyledToast
        className={show && 'show'}
        background={background ?? ambiance.color}
        horizontalAlign={horizontalAlign ?? 'center'}
        verticalAlign={verticalAlign ?? 'top'}
        zIndex={zIndex ?? 9}
        duration={duration ?? 2000}
      >
        {children}
      </StyledToast>
    )
  }
)
