import React, { ReactNode } from 'react'
import { useTheme } from '../../../../hooks/useTheme'
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

export const ModalBody = ({
  color,
  textAlign,
  display,
  alignContent,
  justifyContent,
  alignItems,
  children,
  onScroll
}: Partial<ModalBodyProps>) => {
  const theme = useTheme()
  return (
    <Body
      onScroll={onScroll}
      color={color ?? theme.colors.body}
      typography={theme.typography.body1}
      scrollbarColor={theme.colors.primary}
      textAlign={textAlign}
      display={display}
      alignContent={alignContent}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Body>
  )
}
