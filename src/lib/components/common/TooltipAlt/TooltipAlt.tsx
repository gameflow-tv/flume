import React, { ReactNode, useRef, useState } from 'react'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './TooltipAlt.styles'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipAltProps = {
  children: ReactNode
  label?: string
  position: TooltipPosition
}

export const TooltipAlt = ({ children, label, position }) => {
  const [isHovered, setIsHovered] = useState(false)
  const targetRef = useRef(null)
  const showTooltip = true

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </TooltipTarget>
      {isHovered && (
        <CenterContainer position={position}>
          <TooltipBox position={position}>{label}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  )
}
