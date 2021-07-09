import React, { useContext } from 'react'
import { ToolTip, TooltipPosition } from './Tooltip.styles'
import { ThemeContext } from '../../theme'

export type TooltipProps = {
  content: string
  borderRadius: string
  padding: string
  mediumSpacing: string
  position: TooltipPosition
}

export const Tooltip = ({ content = 'Username taken', position = 'right' }: TooltipProps) => {
  const theme = useContext(ThemeContext)
  return (
    <ToolTip
      borderRadius={theme.spacing.xxsmall}
      padding={theme.spacing.xsmall}
      mediumSpacing={theme.spacing.medium}
      content={content}
      position={position}>
      <input type="text" placeholder="This is the input" />
    </ToolTip>
  )
}
