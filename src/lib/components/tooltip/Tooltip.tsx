import React from 'react'
import { ToolTip } from './Tooltip.styles'

export type TooltipProps = {
  content: string
}
export const Tooltip = ({ content = 'Username taken' }: TooltipProps) => {
  return (
    <div>
      <ToolTip content={content}>
        <input type="text" placeholder="This is the input" />
      </ToolTip>
    </div>
  )
}
