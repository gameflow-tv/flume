import React, { ReactNode } from 'react'
import { Body } from './ModalBody.styles'

export type ModalBodyProps = {
  color?: string
  textAlign?: string
  display?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
  children?: ReactNode
  onScroll?: (e: React.UIEvent<HTMLElement>) => void
}

const ModalBody = ({ children, onScroll, ...styles }: Partial<ModalBodyProps>) => {
  return (
    <Body onScroll={onScroll} {...styles}>
      {children}
    </Body>
  )
}

export default ModalBody
