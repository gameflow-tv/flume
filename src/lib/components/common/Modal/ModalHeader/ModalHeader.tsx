import React, { ReactNode } from 'react'
import { useTheme } from '../../../../hooks/useTheme'
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

export const ModalHeader = ({
  id,
  color,
  textAlign,
  display,
  alignContent,
  justifyContent,
  alignItems,
  children
}: Partial<ModalHeaderProps>) => {
  const theme = useTheme()
  return (
    <Header
      id={id}
      color={color ?? theme.colors.header}
      typography={theme.typography.header1}
      textAlign={textAlign}
      display={display}
      alignContent={alignContent}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Header>
  )
}
