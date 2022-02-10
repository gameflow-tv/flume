import { TypographyStyle, typographyToCss, Transition, transitionToCss } from '../../../theme'
import styled from 'styled-components'
import { ButtonSize, IconPosition } from './'
import { ButtonVariant } from '..'
import { IconName } from '../../icons'

export type StyledButtonProps = {
  type?: 'button' | 'reset' | 'submit'
  form?: string
  borderRadius?: string
  backgroundColor?: string
  foregroundColor?: string
  borderColor?: string
  glow?: string
  shadow?: string
  typography?: TypographyStyle
  size?: ButtonSize
  icon?: IconName
  iconPosition?: IconPosition
  gap?: string
  transition?: Transition
  variant?: ButtonVariant
  disabled?: boolean
}

export const StyledButton = styled.button.attrs((props) => ({
  disabled: props.disabled,
  type: props.type,
  form: props.form
}))<StyledButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.foregroundColor};
  box-shadow: ${(props) => props.shadow};
  border: none;
  outline: none;
  transition: ${(props) => transitionToCss(props.transition)};

  &:hover {
    filter: brightness(${(props) => (props.variant === 'secondary' ? '125%' : '85%')});
    cursor: pointer;
  }

  &:active {
    filter: brightness(75%);
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

  width: ${(props) => props.size === 'full' && '100%'};

  min-width: ${(props) => props.size === 'large' && '160px'};
`

export type ButtonContentProps = StyledButtonProps & {
  verticalMargin?: string
  horizontalMargin?: string
}

export const ButtonContent = styled.div<ButtonContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.icon && props.gap};
  flex-direction: ${(props) => (props.iconPosition === 'right' ? 'row' : 'row-reverse')};
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  margin: ${(props) => props.verticalMargin} ${(props) => props.horizontalMargin};
`
