import React from 'react'
import { ToolTip, TooltipPosition } from './Tooltip.styles'
import { useTheme } from '../../hooks'

export type TooltipProps = {
  content: string
  borderRadius: string
  padding: string
  mediumSpacing: string
  position: TooltipPosition
}

export const Tooltip = ({ content = '', position = 'bottom' }: TooltipProps) => {
  const theme = useTheme()
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
