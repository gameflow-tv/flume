import styled from 'styled-components'
import { TooltipProps } from './Tooltip'

export const ToolTip = styled.div<TooltipProps>`
  align-items: center;
  display: flex;
  background-color: #eee;
  position: relative;
  font-size: 10px;

  &::before,
  &::after {
    position: absolute;
    bottom: -2.50rem;
    transition: all 0.3s ease;
    left: 25%;
  }

  &::before {
    display: flex;
    align-items: center;
    content: attr(content);
    color: #fff;
    height: 30px;
    background-color: #000;
    width: max-content;
    max-width: 300px;
    border-radius: 4px;
    text-align: center;
    padding: 0px 8px;
    transform: translateY(20px);
    opacity: 0;
  }

  &::after {
    width: 15px;
    height: 15px;
    background-color: #000;
    clip-path: polygon(50% 0%, 100% 50%, 50% 50%, 0% 50%);
    content: '';
    position: absolute;
    bottom: -1.1rem;
    left: 45%;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::before,
  &:hover::after {
    transform: translateY(0);
    transform-origin: bottom left;
    opacity: 1;

  }
`
