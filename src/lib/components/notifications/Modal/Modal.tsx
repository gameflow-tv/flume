import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'
import React, { ReactNode } from 'react'
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
  modalHeaderProps,
  modalBody,
  modalBodyProps,
  modalFooter,
  modalFooterProps,
  children,
  onClose,
  padding,
  ariaLabelledby,
  ariaLabel,
  backgroundColor
}: Partial<ModalProps>) => {
  const styles = {
    show: show,
    size: size ?? 'md',
    position: position ?? 'middle',
    animation: animation ?? 'appear',
    backgroundColor: backgroundColor
  }

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
      {...styles}
    >
      <ModalContent
        id={id || `dialog${_.uniqueId()}`}
        className={show === true && 'show'}
        padding={padding}
        ariaLabelledby={ariaLabelledby}
        ariaLabel={ariaLabel}
        ariaHidden={show === false ? true : undefined}
        ariaModal={show === true ? show : undefined}
        {...styles}
      >
        {closeOnlyOnButton === true || showCloseButton ? (
          <CloseButton id="ModalCloseButton" onClick={handleClick} {...styles}>
            <FontAwesomeIcon icon={['fal', 'times']} />
          </CloseButton>
        ) : null}
        {children ? (
          children
        ) : (
          <>
            {modalHeader && <Header {...modalHeaderProps}>{modalHeader}</Header>}
            {modalBody && <Body {...modalBodyProps}>{modalBody}</Body>}
            {modalFooter && <Footer {...modalFooterProps}>{modalFooter}</Footer>}
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  )
}
