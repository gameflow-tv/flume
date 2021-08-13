import styled from 'styled-components'
import { Transition, transitionToCss } from '../../theme'
import { LikeButtonProps } from './LikeButton'

export type LikeIconProps = LikeButtonProps & {
  background?: string
  transition?: Transition
  shadowXs?: string
  shadowS?: string
  border?: string
  glow?: string
}

export const LikeIcon = styled.button<LikeIconProps>`
  width: 42px;
  height: 42px;
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => (props.liked ? props.shadowXs : props.shadowS)};
  background: ${(props) => props.background};
  border: unset;
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.liked ? props.color : props.neutralColor)};
  transition: ${(props) => transitionToCss(props.transition)};
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }

  &:disabled {
    filter: saturate(65%);

    svg {
      opacity: 50%;
    }
  }

  &:active {
    filter: brightness(85%);
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.border}, ${(props) => props.glow},
      ${(props) => props.shadowXs};
  }
`
