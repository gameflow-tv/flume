import React from 'react'
import { Modal, ModalBody } from '..'
import { Header } from './SharingModal.styles'

export const SharingModal = () => {
  return (
    <Modal show={true} size="546px">
      <Header>Share link</Header>
      <ModalBody></ModalBody>
    </Modal>
  )
}
