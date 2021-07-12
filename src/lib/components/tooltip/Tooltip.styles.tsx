import styled from 'styled-components'
import { TooltipProps } from './Tooltip'

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom'
// top: -42px; left: 25%;
const setTooltipCssProps = (position: TooltipPosition): string => {
  switch (position) {
    case 'top':
      return 'bottom: 100%; left: 50%;'
    case 'right':
      return 'top: -50%; right: calc(-5em - 4px);'
    case 'left':
      return 'top: -50%; left: calc(-5em - 4px);'
    default:
      return 'left: 50%; top:100%;'
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
    border-radius: ${(props) => props.borderRadius};
    padding: 0px ${(props) => props.padding};
    transform: ${(props) => {
      switch (props.position) {
        case 'left':
          return 'translate(-80%, 24%);'
        case 'right':
          return 'translate(80%, 24%);'
        case 'top':
          return 'translate(-50%, -70%);'
        default:
          return 'translate(-50%, 70%);'
      }
    }};
    opacity: 0;
  }

  &::after {
    width: ${(props) => props.mediumSpacing};
    height: ${(props) => props.mediumSpacing};
    background-color: black;
    clip-path: polygon(50% 0%, 100% 50%, 50% 50%, 0% 50%);
    content: '';
    position: absolute;
    ${(props) => {
      switch (props.position) {
        case 'left':
          return 'transform: rotate(90deg) translate(-.7em, -50%); top: 50%;'
        case 'right':
          return 'transform: rotate(-90deg) translate(.7em, -50%); top: 50%;'
        case 'top':
          return 'transform: translate(-50%, -90%) rotate(180deg);'
        default:
          return 'transform: translate(-50%, 90%);'
      }
    }}
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    ${(props) => {
      switch (props.position) {
        case 'left':
          return 'left: calc(-20% + 4px);'
        case 'right':
          return 'right: calc(-20% + 4px);'
        case 'top':
          return 'bottom: calc(25% + 4px);'
        default:
          return 'top: calc(25% + 4px);'
      }
    }};
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
    ${(props) => {
      switch (props.position) {
        case 'left':
          return 'left: calc(-20% + 4px);'
        case 'right':
          return 'right: calc(-20% + 4px);'
        case 'top':
          return 'transform: translate(-50%, -30%);'
        default:
          return 'top: calc(25% + 4px);'
      }
    }};
  }
`
