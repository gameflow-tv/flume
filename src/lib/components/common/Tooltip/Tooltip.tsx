import React, { ReactNode, useState } from 'react'
import { useTheme } from '../../../hooks'
import { CenterContainer, TooltipBox, TooltipTarget, TooltipWrapper } from './Tooltip.styles'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

export type TooltipProps = {
  children?: ReactNode
  label?: string
  position?: TooltipPosition
  show?: boolean
}

export const Tooltip = ({ children, label, position }) => {
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </TooltipTarget>
      <CenterContainer position={position}>
        <TooltipBox
          show={isHovered}
          position={position}
          typography={theme.typography.body1}
          color={theme.colors.body}
          background={theme.colors.secondary}
          borderRadius={theme.shapes.borders.small}
          padding={theme.spacing.xsmall}
          shadow={theme.shadows.small}
        >
          {label}
        </TooltipBox>
      </CenterContainer>
    </TooltipWrapper>
  )
}
