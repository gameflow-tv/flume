import React, { ReactNode, useState } from 'react'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './TooltipAlt.styles'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipAltProps = {
  children: ReactNode
  label?: string
  position: TooltipPosition
  show?: boolean
}

export const TooltipAlt = ({ children, label, position }) => {
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
