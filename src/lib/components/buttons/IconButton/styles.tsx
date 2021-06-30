import { transitionToCss } from '../../../theme'
import styled from 'styled-components'
import { ButtonProps } from '../'

export const StyledIconButton = styled.button<ButtonProps>`
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
  min-width: ${(props) => props.size === 'large' && '160px'};
`
