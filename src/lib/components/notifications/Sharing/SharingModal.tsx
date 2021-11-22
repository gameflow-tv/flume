import React from 'react'
import { Modal, ModalBody } from '../Modal'
import { SharingHeader } from './SharingModal.styles'

export const SharingModal = () => {
  return (
    <Modal show={true} size="546px">
      <SharingHeader>Share link</SharingHeader>
      <ModalBody>asdfasdfasdf</ModalBody>
    </Modal>
  )
}
