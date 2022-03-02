import React, { ReactNode } from 'react'
import { useTheme } from '../../../hooks'
import { Icon } from '../../icons'
import { Body, CloseButton, Footer, Header, ModalContent, ModalOverlay } from './Modal.styles'
import { ModalBodyProps } from './ModalBody/ModalBody'
import { ModalFooterProps } from './ModalFooter/ModalFooter'
import { ModalHeaderProps } from './ModalHeader/ModalHeader'

export type ModalSize = 'sm' | 'md' | 'lg'
export type ModalSide = 'top' | 'right' | 'bottom' | 'left' | 'middle'
export type ModalAnimation = 'appear' | 'slideTop' | 'none' | 'all'

export type ModalProps = {
  id?: string
  show?: boolean
  animation?: ModalAnimation
  closeOnlyOnButton?: boolean
  size?: ModalSize | string
  position?: ModalSide
  showCloseButton?: boolean
  modalHeader?: ReactNode
  modalHeaderProps?: ModalHeaderProps
  modalBody?: ReactNode
  modalBodyProps?: ModalBodyProps
  modalFooter?: ReactNode
  modalFooterProps?: ModalFooterProps
  children?: ReactNode
  onClose?: (value?: boolean) => void
  padding?: string
  ariaLabelledby?: string
  ariaLabel?: string
  ariaHidden?: boolean
  ariaModal?: boolean
  backgroundColor?: string
}

export const Modal = ({
  id,
  show,
  animation,
  showCloseButton = true,
  closeOnlyOnButton = false,
  size,
  position,
  modalHeader,
  modalBody,
  modalFooter,
  children,
  onClose,
  padding,
  ariaLabelledby,
  ariaLabel,
  backgroundColor
}: Partial<ModalProps>) => {
  const theme = useTheme()

  const handleClick = (e) => {
    if (['ModalCloseButton', 'ModalOverlay'].includes(e.target.id) && closeOnlyOnButton === false) {
      onClose?.call(e, false)
    }

    if (e.target.id === 'ModalCloseButton') {
      onClose?.call(e, false)
    }
  }

  return (
    <ModalOverlay
      id="ModalOverlay"
      className={show === true && 'show'}
      onClick={handleClick}
      position={position ?? 'middle'}
      animation={animation ?? 'appear'}
      background={backgroundColor}
      transition={theme.transitions.long}
    >
      <ModalContent
        id={id}
        shadow={theme.shadows.small}
        transition={theme.transitions.long}
        borderRadius={theme.shapes.borders.medium}
        size={size ?? 'md'}
        color={theme.colors.header}
        animation={animation ?? 'appear'}
        background={backgroundColor}
        className={show === true && 'show'}
        padding={padding}
        aria-labeledby={ariaLabelledby}
        aria-label={ariaLabel}
        aria-hidden={show === false ? true : undefined}
        aria-modal={show === true ? show : undefined}
      >
        {closeOnlyOnButton === true || showCloseButton ? (
          <CloseButton id="ModalCloseButton" onClick={handleClick} color={theme.colors.subtitle}>
            <Icon icon="close" />
          </CloseButton>
        ) : null}
        {children ? (
          children
        ) : (
          <React.Fragment>
            {modalHeader && (
              <Header typography={theme.typography.header5} color={theme.colors.header}>
                {modalHeader}
              </Header>
            )}
            {modalBody && (
              <Body
                typography={theme.typography.body1}
                color={theme.colors.body}
                scrollbarColor={theme.colors.primary}
              >
                {modalBody}
              </Body>
            )}
            {modalFooter && (
              <Footer typography={theme.typography.body3} color={theme.colors.subtitle}>
                {modalFooter}
              </Footer>
            )}
          </React.Fragment>
        )}
      </ModalContent>
    </ModalOverlay>
  )
}
