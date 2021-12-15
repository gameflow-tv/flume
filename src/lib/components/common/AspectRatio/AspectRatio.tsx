import React from 'react'
import { ReactNode } from 'react'
import { ChildContainer, StyledAspectRatio, StyledAspectRatioProps } from './AspectRatio.styles'

export type AspectRatioProps = StyledAspectRatioProps & {
  children?: ReactNode
}

export const AspectRatio = ({ children, aspectRatio }: AspectRatioProps) => {
  return (
    <StyledAspectRatio aspectRatio={aspectRatio}>
      <ChildContainer>{children}</ChildContainer>
    </StyledAspectRatio>
  )
}
