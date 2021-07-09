import styled from 'styled-components'
import { TooltipProps } from './Tooltip'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'

const setTooltipCssProps = (position: TooltipPosition): string => {
  switch (position) {
    case 'top':
      return 'top: -42px; left: 25%;'
    case 'right':
      return 'right: -60%;'
    case 'left':
      return 'left: -60%; display: flex; justify-content: baseline;'
    default:
      return 'left: 25%; bottom: -40px;'
  }
}

export const ToolTip = styled.div<TooltipProps>`
  position: relative;
  font-size: 10px;

  &::before,
  &::after {
    position: absolute;
    ${(props) => setTooltipCssProps(props.position)}
    transition: all 0.3s ease;
    
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
    border-radius: ${props => props.borderRadius};
    text-align: center;
    padding: 0px ${props => props.padding};
    transform: ${(props) => {
      switch (props.position) {
      case 'left':
        return 'translateX(-20px);'
      case 'right':
        return 'translateX(20px);'
      case 'top':
        return 'translateY(-20px);'
      default:
        return 'translateY(20px);'
    }}};
    opacity: 1;
  }

  &::after {
    width: ${props => props.mediumSpacing};
    height: ${props => props.mediumSpacing};
    background-color: black;
    clip-path: polygon(50% 0%, 100% 50%, 50% 50%, 0% 50%);
    content: '';
    position: absolute;
    ${(props) => {
      switch(props.position) {
      case 'left':
        return 'transform: rotate(90deg); left: -29%; top: 30%;'
      case 'right':
        return 'transform: rotate(-90deg); left: 117%; top: 30%;'
      case 'top':
        return 'transform: rotate(180deg); top: -40px; left: 43%;'
      default:
        return 'bottom: -20px; left: 43%; transform: translateY(20px);'
      }
    }}
    opacity: 1;
    transition: all 0.3s ease;
  }

  
  &:hover::after {
    ${(props) => {
      switch(props.position) {
      case 'left':
        return 'transform: translateX(20px) rotate(90deg);'
      case 'right': 
        return 'transform: rotate(-90deg) translateY(-20px);'
      case 'top': 
        return 'transform: rotate(180deg) translateY(-20px);'
      default:
        return 'transform: translateY(0);'
      }
    }};
     opacity: 1;   
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
`
