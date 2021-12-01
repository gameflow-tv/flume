import styled from 'styled-components'
import { Transition, transitionToCss, typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'
import { ModalAnimation, ModalProps, ModalSide, ModalSize } from './Modal'

const positionateModal = (position: ModalSide) => {
  switch (position) {
    case 'top':
      return `
                align-items: flex-start;
                justify-content: center;
            `
    case 'left':
      return `
                align-items: center;;
                justify-content: flex-start;
            `
    case 'right':
      return `
                align-items: center;
                justify-content: flex-end;
            `
    case 'bottom':
      return `
                align-items: flex-end;
                justify-content: center;
            `
    case 'middle':
    default:
      return `
                align-items: center;
                justify-content: center;
            `
  }
}

const setModalSize = (size: ModalSize | string) => {
  if (size.substr(-2) === 'px') {
    if (!Number.isNaN(Number(size.substr(0, size.length - 2)))) {
      return size
    } else {
      return '50%'
    }
  } else if (size.substr(-1) === '%') {
    if (!Number.isNaN(Number(size.substr(0, size.length - 1)))) {
      return size
    } else {
      return '50%'
    }
  }

  switch (size) {
    case 'sm':
      return '20%'
    case 'lg':
      return '80%'
    case 'md':
    default:
      return '50%'
  }
}

const makeTransition = (animation: ModalAnimation, transition: Transition, delay = false) => {
  let selection = ''

  if (animation === 'none') {
    return undefined
  }

  switch (animation) {
    case 'slideTop':
      selection = 'top'
      break
    case 'all':
      selection = 'all'
      break
    case 'appear':
    default:
      selection = 'opacity'
      break
  }

  const { duration, curve } = transition

  return {
    transition: transitionToCss({ selection, duration, curve }),
    transitionDelay: delay && duration
  }
}

export const ModalOverlay = styled.div<ModalProps>`
  display: flex;
  flex-direction: row;
  ${(props) => positionateModal(props.position)};
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: ${theme.colors.modalOverlay};
  z-index: -1;
  opacity: 0;
  ${(props) => makeTransition(props.animation, theme.transitions.long)};

  &.show {
    z-index: 99;
    opacity: 1;
  }
`

export const ModalContent = styled.div.attrs((props) => ({
  role: 'dialog',
  'aria-labelledby': props['ariaLabelledby'],
  'aria-label': props['ariaLabel'],
  'aria-hidden': props['ariaHidden'],
  'aria-modal': props['ariaModal']
}))<ModalProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  position: relative;
  color: ${theme.colors.primaryText};
  background-color: ${(props) => props.backgroundColor ?? theme.colors.background};
  width: ${(props) => setModalSize(props.size)};
  box-shadow: 0px 4px 8px ${theme.colors.shadow};
  border-radius: ${theme.shapes.borders.medium};
  max-height: 95%;
  padding: ${(props) => props.padding || '20px 0'};
  opacity: 0;
  top: 100vh;

  &.show {
    ${(props) => makeTransition(props.animation, theme.transitions.long, true)};
    top: 0;
    opacity: 1;
  }
`

export const CloseButton = styled.button<ModalProps>`
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  outline: inherit;
  color: ${theme.colors.tertiaryText};
  font-size: 24px;
  cursor: pointer;

  & > svg {
    pointer-events: none;
  }
`

export type ModalHeaderProps = {
  color?: string
  textAlign?: string
}

export const Header = styled.div<ModalHeaderProps>`
  color: ${(props) => props.color ?? theme.colors.primaryText};
  ${typographyToCss(theme.typography.header1)};
  text-align: ${(props) => props.textAlign ?? 'center'};
  letter-spacing: 0.3px;
  font-weight: 600;
  margin-bottom: 32px;
  padding: 0 10px;
`

export type ModalBodyProps = {
  color?: string
  textAlign?: string
}

export const Body = styled.div<ModalBodyProps>`
  position: relative;
  color: ${(props) => props.color ?? theme.colors.tertiaryText};
  ${typographyToCss(theme.typography.body1)}
  text-align: ${(props) => props.textAlign ?? 'center'};
  overflow: auto;
  padding: 0 10px;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary} transparent;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.colors.primary};
  }

  &::-webkit-scrollbar-button {
    width: 5px;
    background: ${theme.colors.primary};
    height: 5px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export type ModalFooterProps = {
  color?: string
  textAlign?: string
}

export const Footer = styled.div<ModalFooterProps>`
  color: ${(props) => props.color ?? theme.colors.primaryText};
  text-align: ${(props) => props.textAlign ?? 'center'};
  ${typographyToCss(theme.typography.body2)}
  margin-top: 32px;
  padding: 0 10px;
`
