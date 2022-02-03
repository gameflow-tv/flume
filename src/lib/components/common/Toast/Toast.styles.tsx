import styled, { css, keyframes } from 'styled-components'
import { ToastProps } from '.'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'

const toastConfig = {
  width: '270px',
  slideDirection: 'top',
  position: {
    initial: {
      bottom: '100%',
      left: '50%',
      transformX: '-50%',
      transformY: '0'
    },
    final: {
      bottom: '100%',
      left: '50%',
      transformX: '-50%',
      transformY: 'calc(100% + 64px)'
    }
  }
}

const initializeToast = (props: ToastProps) => {
  const setInitialPos = () => {
    if (['left', 'right'].includes(toastConfig.slideDirection)) {
      toastConfig.position.initial.left = toastConfig.slideDirection === 'left' ? '0' : '100%'
      toastConfig.position.initial.transformX =
        toastConfig.slideDirection === 'left' ? '-100%' : '0'

      if (props.verticalAlign === 'top') {
        toastConfig.position.initial.bottom = '100%'
        toastConfig.position.initial.transformY = 'calc(100% + 64px)'
      }
      if (props.verticalAlign === 'middle') {
        toastConfig.position.initial.bottom = '50%'
        toastConfig.position.initial.transformY = '50%'
      }
      if (props.verticalAlign === 'bottom') {
        toastConfig.position.initial.bottom = '0'
        toastConfig.position.initial.transformY = '-64px'
      }
    }

    if (['top', 'bottom'].includes(toastConfig.slideDirection)) {
      toastConfig.position.initial.left = '50%'
      toastConfig.position.initial.transformX = '-50%'

      if (props.verticalAlign === 'top') {
        toastConfig.position.initial.bottom = '100%'
        toastConfig.position.initial.transformY = '0'
      }

      if (props.verticalAlign === 'middle') {
        toastConfig.position.initial.bottom = '100%'
        toastConfig.position.initial.transformY = '0'
      }

      if (props.verticalAlign === 'bottom') {
        toastConfig.position.initial.bottom = '0'
        toastConfig.position.initial.transformY = '100%'
      }
    }
  }

  const setFinalPos = () => {
    switch (props.verticalAlign) {
      case 'top':
        toastConfig.position.final.bottom = '100%'
        toastConfig.position.final.transformY = 'calc(100% + 64px)'
        break
      case 'middle':
        toastConfig.position.final.bottom = '50%'
        toastConfig.position.final.transformY = '50%'
        break
      case 'bottom':
        toastConfig.position.final.bottom = '0'
        toastConfig.position.final.transformY = '-64px'
        break
      default:
        break
    }

    switch (props.horizontalAlign) {
      case 'left':
        toastConfig.position.final.left = '0'
        toastConfig.position.final.transformX = '32px'
        break
      case 'middle':
        toastConfig.position.final.left = '50%'
        toastConfig.position.final.transformX = '-50%'
        break
      case 'right':
        toastConfig.position.final.left = '100%'
        toastConfig.position.final.transformX = 'calc(-100% - 32px)'
        break
      default:
        break
    }
  }

  switch (props.horizontalAlign) {
    case 'left':
      toastConfig.slideDirection = 'left'
      break
    case 'right':
      toastConfig.slideDirection = 'right'
      break
    case 'middle':
    default:
      toastConfig.slideDirection = ['middle', 'top'].includes(props.verticalAlign)
        ? 'top'
        : 'bottom'
      break
  }

  setInitialPos()
  setFinalPos()
}

const getAnimation = (step) => {
  switch (step) {
    case 'in':
      return {
        from: `bottom: ${toastConfig.position.initial.bottom}; transform: translateX(${toastConfig.position.initial.transformX}) translateY(${toastConfig.position.initial.transformY});`,
        to: `bottom: ${toastConfig.position.final.bottom}; transform: translateX(${toastConfig.position.final.transformX}) translateY(${toastConfig.position.final.transformY});`
      }
    case 'stay':
      return {
        from: `bottom: ${toastConfig.position.final.bottom}; transform: translateX(${toastConfig.position.final.transformX}) translateY(${toastConfig.position.final.transformY});`,
        to: `bottom: ${toastConfig.position.final.bottom}; transform: translateX(${toastConfig.position.final.transformX}) translateY(${toastConfig.position.final.transformY});`
      }
    case 'out':
      return {
        from: `bottom: ${toastConfig.position.final.bottom}; transform: translateX(${toastConfig.position.final.transformX}) translateY(${toastConfig.position.final.transformY});`,
        to: `bottom: ${toastConfig.position.initial.bottom}; transform: translateX(${toastConfig.position.initial.transformX}) translateY(${toastConfig.position.initial.transformY});`
      }
    default:
      return {
        from: `bottom: ${toastConfig.position.final.bottom}; transform: translateX(${toastConfig.position.final.transformX}) translateY(${toastConfig.position.final.transformY});`,
        to: `bottom: ${toastConfig.position.initial.bottom}; transform: translateX(${toastConfig.position.initial.transformX}) translateY(${toastConfig.position.initial.transformY});`
      }
  }
}

const slideIn = (props) => {
  const { from, to } = getAnimation('in')

  return keyframes`
    from {
      ${from}
    }
    to {
      ${to}
    }
  `
}

const stay = (props) => {
  const { from, to } = getAnimation('stay')

  return keyframes`
    from {
      ${from}
    }
    to {
      ${to}
    }
  `
}

const slideOut = (props) => {
  const { from, to } = getAnimation('out')

  return keyframes`
    from {
      ${from}
    }
    to {
      ${to}
    }
  `
}

const animation = (props: ToastProps) => {
  return css<ToastProps>`
    animation: ${slideIn}, ${stay}, ${slideOut};
    animation-duration: ${(props) =>
      `${props.animation.slideInTime / 1000}s, ${props.duration / 1000}s, ${
        props.animation.slideOutTime / 1000
      }s`};
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) =>
      `0s, ${props.animation.slideInTime / 1000}s, ${
        (props.duration + props.animation.slideInTime) / 1000
      }s`};
  `
}

export const StyledToast = styled.div((props: ToastProps) => {
  initializeToast(props)

  return css`
    position: fixed;
    ${typographyToCss(theme.typography.body1)}
    letter-spacing: 0.3px;
    color: ${theme.colors.secondaryText};
    padding: 16px 24px;
    background-color: ${props.backgroundColor || theme.colors.toggle};
    border: ${theme.shapes.borders.xxsmall} solid ${theme.colors.border};
    border-radius: ${theme.spacing.xxsmall};
    box-shadow: ${theme.shadows.xsmall};
    box-sizing: border-box;
    width: ${toastConfig.width};
    max-width: ${toastConfig.width};
    text-align: center;
    z-index: ${props.zIndex};
    bottom: ${toastConfig.position.initial.bottom};
    left: ${toastConfig.position.initial.left};
    transform: ${`translateX(${toastConfig.position.initial.transformX}) translateY(${toastConfig.position.initial.transformY})`};

    &.show {
      ${animation}
    }
  `
})
