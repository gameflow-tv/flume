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
  hoverBackgroundColor?: string
  hoverForegroundColor?: string
  hidden?: boolean
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.foregroundColor};
  box-shadow: ${(props) => props.shadow};
  border: none;
  outline: none;
  transition: ${(props) => transitionToCss(props.transition)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};

  &:hover {
    ${(props) =>
      props.hoverBackgroundColor
        ? `background-color: ${props.hoverBackgroundColor}`
        : 'filter: brightness(110%)'};

    box-shadow: ${(props) => props.hoverShadow};
    cursor: pointer;

    svg {
      ${(props) =>
        props.hoverForegroundColor
          ? `fill: ${props.hoverForegroundColor}`
          : 'filter: brightness(120%)'};
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
      color: ${(props) => props.foregroundColor};
    }
  }

  font-size: ${(props) =>
    props.size === 'large' || props.size === 'xlarge'
      ? '18px'
      : props.size === 'medium'
      ? '16px'
      : '14px'};

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
