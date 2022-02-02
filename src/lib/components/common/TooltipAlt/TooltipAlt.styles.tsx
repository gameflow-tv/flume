import styled, { css } from 'styled-components'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'
import { TooltipAltProps } from './TooltipAlt'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`
export const TooltipTarget = styled.div`
  background: none;
  padding: ${theme.spacing.xxsmall};
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
export const TooltipBox = styled.span<TooltipAltProps>`
  ${typographyToCss(theme.typography.body1)};
  color: ${theme.colors.secondaryText};
  position: relative;
  background-color: ${theme.colors.onBackground};
  text-align: center;
  border-radius: ${theme.shapes.borders.small};
  padding: ${theme.spacing.xsmall};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-50%)')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};

  ${({ position, show }) => {
    switch (position) {
      case 'bottom':
        return css`
          transform: ${show ? 'translateY(0)' : 'translateY(50%)'};
        `
      case 'right':
        return css`
          transform: ${show ? 'translateY(0)' : 'translateX(50%)'};
        `
      case 'left':
        return css`
          transform: ${show ? 'translateY(0)' : 'translateX(-50%)'};
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
    border-color: ${theme.colors.onBackground} transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          &::after {
            border-color: transparent transparent ${theme.colors.onBackground} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `
      case 'left':
        return css`
          &::after {
            border-color: transparent transparent transparent ${theme.colors.onBackground};
            left: 100%;
            top: calc(50% - 5px);
          }
        `
      case 'right':
        return css`
          &::after {
            border-color: transparent ${theme.colors.onBackground} transparent transparent;
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
