import styled, { css } from 'styled-components'
import { TooltipAltProps, TooltipPosition } from './TooltipAlt'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`
export const TooltipTarget = styled.button`
  border: 1px solid black;
  background: none;
  padding: 5px;
  color: inherit;
  cursor: inherit;
  display: flex;
`
export const CenterContainer = styled.div<TooltipAltProps>`
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
          margin-left: 0;
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
          left: unset;
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
export const TooltipBox = styled.span<TooltipAltProps>`
  position: relative;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 8px;
  font-size: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #000000 transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          &::after {
            border-color: transparent transparent #000000 transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `
      case 'left':
        return css`
          &::after {
            border-color: transparent transparent transparent #000000 transparent transparent;
            left: 100%;
            top: calc(50% - 5px);
          }
        `
      case 'right':
        return css`
          &::after {
            border-color: transparent #000000 transparent transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `
      default:
        return css``
    }
  }}
`
