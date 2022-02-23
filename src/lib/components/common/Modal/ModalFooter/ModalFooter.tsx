import React, { ReactNode } from 'react'
import { useTheme } from '../../../../hooks'
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

export const ModalFooter = ({
  color,
  textAlign,
  display,
  alignContent,
  justifyContent,
  alignItems,
  children
}: Partial<ModalFooterProps>) => {
  const theme = useTheme()

  return (
    <Footer
      color={color ?? theme.colors.subtitle}
      typography={theme.typography.body2}
      textAlign={textAlign}
      display={display}
      alignContent={alignContent}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Footer>
  )
}
