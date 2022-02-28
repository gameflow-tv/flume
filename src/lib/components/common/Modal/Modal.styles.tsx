import styled from 'styled-components'
import { Transition, transitionToCss, TypographyStyle, typographyToCss } from '../../../theme'
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

export const ModalOverlay = styled.div<{
  position: ModalSide
  animation: ModalAnimation
  background: string
  transition: Transition
}>`
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
  background-color: ${(props) => props.background};
  z-index: -1;
  opacity: 0;
  ${(props) => makeTransition(props.animation, props.transition)};

  &.show {
    z-index: 99;
    opacity: 1;
  }
`

export const ModalContent = styled.div.attrs((props) => ({
  role: 'dialog'
}))<{
  background: string
  size: string
  padding: string
  animation: ModalAnimation
  color: string
  shadow: string
  borderRadius: string
  transition: Transition
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  position: relative;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  width: ${(props) => setModalSize(props.size)};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.borderRadius};
  max-height: 95%;
  padding: ${(props) => props.padding || '20px 0'};
  opacity: 0;
  top: 100vh;

  &.show {
    ${(props) => makeTransition(props.animation, props.transition, true)};
    top: 0;
    opacity: 1;
  }
`

export const CloseButton = styled.button<{ color: string }>`
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  outline: inherit;
  color: ${(props) => props.color};
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  & > div {
    pointer-events: none;
  }
`

export type ModalHeaderProps = {
  color: string
  typography: TypographyStyle
  textAlign?: string
}

export const Header = styled.div<ModalHeaderProps>`
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.typography)};
  text-align: ${(props) => props.textAlign ?? 'center'};
  letter-spacing: 0.3px;
  font-weight: 600;
  margin-bottom: 32px;
  padding: 0 10px;
`

export type ModalBodyProps = {
  color: string
  textAlign?: string
  typography: TypographyStyle
  scrollbarColor: string
}

export const Body = styled.div<ModalBodyProps>`
  position: relative;
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.typography)}
  text-align: ${(props) => props.textAlign ?? 'center'};
  overflow: auto;
  padding: 0 10px;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollbarColor} transparent;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.scrollbarColor};
  }

  &::-webkit-scrollbar-button {
    width: 5px;
    background: ${(props) => props.scrollbarColor};
    height: 5px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export type ModalFooterProps = {
  color: string
  textAlign?: string
  typography: TypographyStyle
}

export const Footer = styled.div<ModalFooterProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign ?? 'center'};
  ${(props) => typographyToCss(props.typography)}
  margin-top: 32px;
  padding: 0 10px;
`
