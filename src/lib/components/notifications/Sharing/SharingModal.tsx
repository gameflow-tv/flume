import React from 'react'
import { Modal } from '../Modal'
import { SharingBody, SharingHeader } from './SharingModal.styles'

export const SharingModal = () => {
  return (
    <Modal show={true} size="546px">
      <SharingHeader>Share link</SharingHeader>
      <SharingBody>asdfasdfasdf</SharingBody>
    </Modal>
  )
}
