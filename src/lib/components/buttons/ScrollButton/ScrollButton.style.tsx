import styled from 'styled-components'
import { ScrollButtonProps } from './ScrollButton'

export const Button = styled.button<ScrollButtonProps>`
  width: 55px;
  height: 55px;
  border-radius: ${(props) => props.borderRadius};
  background: linear-gradient(180deg, #525556 0%, #434647 100%);
  border: unset;
  box-shadow: ${(props) => props.boxShadowSmall};
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;
  filter: brightness(80%);
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(100%);
    background: linear-gradient(180deg, #666a6b 0%, #575b5c 100%);
  }

  &:focus {
    filter: brightness(100%);
    box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 1);
  }

  &:active {
    background: linear-gradient(180deg, #3a3c3d 0%, #2b2d2e 100%);
    box-shadow: ${(props) => props.boxShadowXSmall};
  }

  &:disabled {
    background: #434647;
    box-shadow: ${(props) => props.boxShadowSmall};
    color: rgba(255, 255, 255, 0.5);
  }
`
