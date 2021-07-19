import styled from 'styled-components'
import { LikeButtonProps } from './LikeButton'

export const LikeIcon = styled.button<LikeButtonProps>`
  width: 42px;
  height: 42px;
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => (props.liked ? props.xSmallShadow : props.smallShadow)};
  background: #525556;
  border: unset;
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.liked ? props.color : props.neutralColor)};
  filter: brightness(80%);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }

  &:disabled {
    background: #36393b;
    box-shadow: 0px 2px 6.4px rgba(0, 0, 0, 0.1);
    color: #eeeeee8b;
  }

  &:focus {
    filter: brightness(100%);
  }
`
