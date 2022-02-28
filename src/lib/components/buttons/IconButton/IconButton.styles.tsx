import { Transition, transitionToCss } from '../../../theme'
import styled from 'styled-components'
import { IconButtonSize } from './IconButton'

export type StyledIconButtonProps = {
  borderRadius?: string
  background?: string
  foreground?: string
  transition?: Transition
  shadow?: string
  hoverShadow?: string
  borderColor?: string
  glow?: string
  size?: IconButtonSize
  hoverBackground?: string
  hoverForeground?: string
  hidden?: boolean
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.background};
  color: ${(props) => props.foreground};
  box-shadow: ${(props) => props.shadow};
  border: none;
  outline: none;
  transition: ${(props) => transitionToCss(props.transition)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};

  &:hover {
    ${(props) =>
      props.hoverBackground
        ? `background-color: ${props.hoverBackground}`
        : 'filter: brightness(110%)'};

    box-shadow: ${(props) => props.hoverShadow};
    cursor: pointer;

    svg {
      ${(props) =>
        props.hoverForeground ? `fill: ${props.hoverForeground}` : 'filter: brightness(120%)'};
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
      color: ${(props) => props.foreground};
    }
  }

  min-width: ${(props) =>
    props.size === 'xlarge'
      ? '55px'
      : props.size === 'large'
      ? '42px'
      : props.size === 'medium'
      ? '37px'
      : '30px'};

  min-height: ${(props) =>
    props.size === 'xlarge'
      ? '55px'
      : props.size === 'large'
      ? '42px'
      : props.size === 'medium'
      ? '37px'
      : '30px'};
`
