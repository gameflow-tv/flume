import React, { ReactNode } from 'react'
import { Footer } from './ModalFooter.styles'

export type ModalFooterProps = {
  color?: string
  textAlign?: string
  display?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
  children?: ReactNode
}

const ModalFooter = ({ children, ...styles }: Partial<ModalFooterProps>) => {
  return <Footer {...styles}>{children}</Footer>
}

export default ModalFooter
