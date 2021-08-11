import styled from 'styled-components'
import theme from '../../theme/theme'
import { LikeButtonProps } from './LikeButton'

export const LikeIcon = styled.button<LikeButtonProps>`
  width: 42px;
  height: 42px;
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => (props.liked ? props.xSmallShadow : props.smallShadow)};
  background: ${theme.colors.onBackground};
  border: unset;
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.liked ? props.color : props.neutralColor)};
  transition: ${theme.transitions.long};
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
    box-shadow: 0 0 0 1px ${theme.colors.buttonBorder}, ${theme.shadows.glow},
      ${theme.shadows.xsmall};
  }
`
