import React, { ReactNode, useState } from 'react'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './Tooltip.styles'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipProps = {
  children?: ReactNode
  label?: string
  position?: TooltipPosition
  show?: boolean
}

export const Tooltip = ({ children, label, position }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {children}
      </TooltipTarget>
      <CenterContainer position={position}>
        <TooltipBox show={isHovered} position={position}>
          {label}
        </TooltipBox>
      </CenterContainer>
    </TooltipWrapper>
  )
}
