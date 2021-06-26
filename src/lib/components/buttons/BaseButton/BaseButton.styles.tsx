import { TypographyStyle, typographyToCss } from '@theme/typography'
import styled from 'styled-components'
import { ButtonSize } from '..'

export type StyledBaseButtonProps = {
  borderRadius?: string
  backgroundColor?: string
  foregroundColor?: string
  borderColor?: string
  glow?: string
  shadow?: string
  typography?: TypographyStyle
  size: ButtonSize
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.foregroundColor};

  &:hover {
  }

  &:focus {
    border: 1px solid ${(props) => props.borderColor};
    box-shadow: ${(props) => props.glow} ${(props) => props.shadow};
  }

  p {
    ${(props) => typographyToCss(props.typography)}
  }

  min-width: ${(props) => props.size === 'large' && '160px'};
`

export type BaseButtonContentProps = {
  verticalMargin: string
  horizontalMargin: string
}

export const BaseButtonContent = styled.div<BaseButtonContentProps>`
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  display: inline-block;
  margin: ${(props) => props.verticalMargin}
    ${(props) => props.horizontalMargin};
`
