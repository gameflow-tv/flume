import { TypographyStyle, typographyToCss } from '@theme/typography'
import styled from 'styled-components'
import { ButtonSize, IconPosition } from '@components/buttons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Transition, transitionToCss } from '@theme/transitions'

export type StyledBaseButtonProps = {
  borderRadius?: string
  backgroundColor?: string
  foregroundColor?: string
  borderColor?: string
  glow?: string
  shadow?: string
  typography?: TypographyStyle
  size: ButtonSize
  icon?: IconProp
  icon_position: IconPosition
  gap?: string
  transition?: Transition
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.foregroundColor};
  box-shadow: ${(props) => props.shadow};
  border: none;
  outline: none;
  transition: ${(props) => transitionToCss(props.transition)};

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(85%);
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.borderColor}, ${(props) => props.glow},
      ${(props) => props.shadow};
  }

  &:disabled {
    filter: saturate(65%);

    svg,
    p {
      opacity: 50%;
    }
  }

  p {
    ${(props) => typographyToCss(props.typography)}
  }

  min-width: ${(props) => props.size === 'large' && '160px'};
`

export type BaseButtonContentProps = StyledBaseButtonProps & {
  verticalMargin: string
  horizontalMargin: string
}

export const BaseButtonContent = styled.div<BaseButtonContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.icon && props.gap};
  flex-direction: ${(props) => (props.icon_position === 'right' ? 'row' : 'row-reverse')};
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  margin: ${(props) => props.verticalMargin} ${(props) => props.horizontalMargin};
`
