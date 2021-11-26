import styled, { css, keyframes } from 'styled-components'
import { ToastProps } from '.'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'

const positions = {
  iniXPos: 'left: 50%',
  finalXPos: 'left: 50%',
  translateXPos: '-50%',
  iniYPos: 'top: -53px',
  finalYPos: 'top: 32px',
  translateYPos: '0'
}

const initializePosition = (props: ToastProps) => {
  const { horizontalAlign, verticalAlign } = props

  switch (horizontalAlign) {
    case 'left':
      positions.iniXPos = 'left: 32px'
      break
    case 'right':
      positions.finalXPos = 'right: 32px'
      break
    case 'middle':
    default:
      positions.iniXPos = 'left: 50%'
      positions.translateXPos = '-50%'
  }

  switch (verticalAlign) {
    case 'bottom':
      positions.iniYPos = 'bottom: -53px'
      positions.finalYPos = 'bottom: 32px'
      positions.translateYPos = '0'
      break
    case 'middle':
      positions.iniYPos = 'top: -53px'
      positions.finalYPos = 'top: 50%'
      positions.translateYPos = '-50%'
      break
    case 'top':
    default:
      positions.iniYPos = 'top: -53px'
      positions.finalYPos = 'top: 32px'
      positions.translateYPos = '0'
  }
}

const getToastPosition = (props: ToastProps) => {
  initializePosition(props)
  return css`
    ${positions.iniYPos};
    ${positions.iniXPos};
    transform: translateX(${positions.translateXPos}) translateY(${positions.translateYPos});
  `
}

const slideIn = (props) => keyframes`
  from {
    ${positions.iniYPos};
  }
  to {
    ${positions.finalYPos};
  }
`

const stay = (props) => keyframes`
from {
  ${positions.finalYPos};
}
to {
  ${positions.finalYPos};
}
`

const slideOut = (props) => keyframes`
  from {
    ${positions.finalYPos};
  }
  to {
    ${positions.iniYPos};
  }
`

const animation = (props) => {
  initializePosition(props)
  return css<ToastProps>`
    animation: ${slideIn}, ${stay}, ${slideOut};
    animation-duration: ${(props) =>
      `${props.animation.slideInTime}s, ${props.animation.visibilityTime}s, ${props.animation.slideOutTime}s`};
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) =>
      `0s, ${props.animation.slideInTime}s, ${
        props.animation.visibilityTime + props.animation.slideInTime
      }s`};
  `
}

export const StyleToast = styled.div<ToastProps>`
  position: fixed;
  ${typographyToCss(theme.typography.body1)}
  letter-spacing: 0.3px;
  color: ${theme.colors.secondaryText};
  padding: 16px 24px;
  background-color: ${theme.colors.toggle};
  border: ${theme.shapes.borders.xxsmall} solid ${theme.colors.border};
  box-shadow: ${theme.shadows.xsmall};
  border-radius: ${theme.spacing.xxsmall};
  ${getToastPosition}
  ${animation}
`
