import React, { ReactNode } from 'react'
import { Header } from './ModalHeader.styles'

export type ModalHeaderProps = {
  id?: string
  color?: string
  textAlign?: string
  display?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
  children?: ReactNode
}

export const ModalHeader = ({ children, ...styles }: Partial<ModalHeaderProps>) => {
  return <Header {...styles}>{children}</Header>
}
