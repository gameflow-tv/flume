import { Transition, transitionToCss } from '../../../theme'
import styled from 'styled-components'
import { IconButtonSize } from './IconButton'

export type StyledIconButtonProps = {
  borderRadius?: string
  backgroundColor?: string
  foregroundColor?: string
  transition?: Transition
  shadow?: string
  hoverShadow?: string
  borderColor?: string
  glow?: string
  size?: IconButtonSize
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.foregroundColor};
  box-shadow: ${(props) => props.shadow};
  border: none;
  outline: none;
  transition: ${(props) => transitionToCss(props.transition)};

  &:hover {
    filter: brightness(110%);
    box-shadow: ${(props) => props.hoverShadow};
    cursor: pointer;

    svg {
      filter: brightness(110%);
    }
  }

  &:active {
    filter: brightness(75%);

    svg {
      transform: scale(0.95);
    }
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
      font-size: ${(props) => (props.size === 'large' ? '18px' : '16px')};
      color: ${(props) => props.foregroundColor};
    }
  }
  min-width: ${(props) => (props.size === 'large' ? '42px' : '30px')};
  min-height: ${(props) => (props.size === 'large' ? '42px' : '30px')};
`
