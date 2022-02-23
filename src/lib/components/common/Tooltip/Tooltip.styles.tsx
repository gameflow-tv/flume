import styled, { css } from 'styled-components'
import { TooltipPosition } from '.'
import { TypographyStyle, typographyToCss } from '../../../theme'
import { TooltipProps } from './Tooltip'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`
export const TooltipTarget = styled.div`
  background: none;
  color: inherit;
  cursor: inherit;
  display: flex;
`
export const CenterContainer = styled.div<TooltipProps>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% - 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          bottom: unset;
          top: calc(100% + 5px);
        `
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `
      default:
        return css`
          bottom: calc(100% + 5px);
        `
    }
  }}
`
export const TooltipBox = styled.span<{
  typography: TypographyStyle
  color: string
  background: string
  borderRadius: string
  padding: string
  show: boolean
  position: TooltipPosition
  shadow: string
}>`
  ${(props) => typographyToCss(props.typography)};
  color: ${(props) => props.color};
  position: relative;
  background-color: ${(props) => props.background};
  text-align: center;
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) => props.shadow};
  transform: ${(props) => (props.show ? 'translateY(-10px)' : 'translateY(-50%)')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};

  ${({ position, show }) => {
    switch (position) {
      case 'bottom':
        return css`
          transform: ${show ? 'translateY(10px)' : 'translateY(50%)'};
        `
      case 'right':
        return css`
          transform: ${show ? 'translateX(10px)' : 'translateX(50%)'};
        `
      case 'left':
        return css`
          transform: ${show ? 'translateX(-10px)' : 'translateX(-50%)'};
        `
    }
  }}
  transition: all 0.1s ease-out;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.borderRadius} transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position, background }) => {
    switch (position) {
      case 'bottom':
        return css`
          &::after {
            border-color: transparent transparent ${background} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `
      case 'left':
        return css`
          &::after {
            border-color: transparent transparent transparent ${background};
            left: 100%;
            top: calc(50% - 5px);
          }
        `
      case 'right':
        return css`
          &::after {
            border-color: transparent ${background} transparent transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `
      default:
        return css`
          &::after {
            border-color: ${background} transparent transparent transparent;
            right: 100%;
            left: calc(50% - 5px);
            bottom: unset;
          }
        `
    }
  }}
`
