import { Story } from '@storybook/react'
import * as React from 'react'
import { Button } from '../../buttons'
import Modal, { ModalProps } from './Modal'
import ModalBody from '../ModalBody/ModalBody'
import ModalFooter from '../ModalFooter/ModalFooter'
import ModalHeader from '../ModalHeader/ModalHeader'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      options: ['middle', 'top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
      defaultValue: 'middle'
    },
    animation: {
      options: ['appear', 'slideTop', 'none', 'all'],
      control: { type: 'radio' },
      defaultValue: 'slideTop'
    }
  }
}

const Template: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = React.useState<boolean>(args.show)
  return (
    <div>
      <Button label="Show Modal" onClick={() => setShowModal(true)} />
      <Modal {...args} show={showModal} onClose={(val: boolean) => setShowModal(val)} />
    </div>
  )
}

const bodyCntent = (
  <div>
    Lorem Ipsum <br />
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."{' '}
    <br />
    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because
    it is pain..." <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nunc sed lectus
    sodales, in consectetur sapien viverra. Proin sodales egestas eros, vel fringilla arcu convallis
    vitae. Nunc scelerisque vel risus non accumsan. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Vivamus posuere ipsum non arcu aliquet interdum. In
    volutpat lectus eget neque dictum lobortis. Nunc eu tempor erat. Curabitur eget gravida magna.
    Donec auctor elementum dui, eget viverra turpis elementum ac. Mauris eget ligula semper,
    fermentum mauris in, aliquam purus. Quisque a varius lacus. In tincidunt urna libero, et
    placerat arcu eleifend quis. Maecenas ut scelerisque lectus. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. <br />
    Suspendisse metus ex, pellentesque in leo nec, dictum rutrum urna. Vivamus non maximus mi.
    Praesent consectetur lorem at viverra scelerisque. Vivamus cursus, orci sit amet maximus
    malesuada, arcu leo interdum felis, at dapibus nulla arcu non ipsum. Vivamus feugiat est id
    sapien porttitor sagittis. Donec ultrices pulvinar libero, non vulputate lorem varius ut. Mauris
    vehicula, tortor ac dapibus mattis, dolor quam blandit dolor, ut sagittis metus dolor eget
    ligula. Vivamus tincidunt neque elementum, ullamcorper eros sit amet, vestibulum neque. In nec
    elementum tellus. Vestibulum imperdiet nisl vel egestas maximus. Ut ac ex eget orci laoreet
    vestibulum et porta augue. Donec convallis urna vel venenatis efficitur. <br />
    Fusce mollis ex eu orci viverra suscipit. Sed vehicula dui volutpat viverra tincidunt. Nullam
    pellentesque venenatis justo eu blandit. Nulla vel auctor diam. Sed fringilla urna in felis
    dapibus, a fermentum mauris tempor. Fusce suscipit mattis blandit. Vivamus condimentum diam
    eros, eu imperdiet sem vehicula ultrices. Cras sit amet fringilla massa. <br />
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Vestibulum rutrum venenatis vestibulum. Nam dui mauris, lobortis at vestibulum ac, aliquam a
    nunc. Quisque congue, nibh sed scelerisque varius, nisi dolor faucibus erat, vitae dapibus justo
    sem et neque. Mauris efficitur arcu sit amet dui venenatis placerat nec eget sem. Nam ac elit at
    turpis maximus mollis hendrerit non nulla. Fusce eget posuere tellus. Vestibulum tortor lacus,
    fermentum id suscipit nec, pharetra nec lacus. Integer quis sodales augue. In facilisis aliquet
    faucibus. Phasellus iaculis mollis porttitor. Aenean cursus tincidunt sollicitudin. In euismod
    porttitor urna, ac faucibus ex elementum eget. Nulla facilisi. Aenean ipsum libero, mattis ut
    nisi in, gravida mattis erat. <br />
    Maecenas id lacinia lectus. Fusce finibus molestie ipsum, ut tristique erat pharetra ut. Sed
    bibendum ligula nec fermentum viverra. Curabitur pellentesque, turpis ac iaculis consequat,
    magna ipsum tincidunt risus, a porttitor arcu libero at odio. Donec eu nibh laoreet nisi luctus
    volutpat. Aenean blandit neque sit amet rutrum viverra. Aliquam faucibus augue id imperdiet
    blandit. Quisque non ex volutpat, vehicula elit quis, blandit sapien. Curabitur a orci commodo,
    aliquet nisl a, posuere lectus. Pellentesque ut lacinia turpis. Etiam auctor posuere nisi
    viverra ultrices. Donec porttitor fermentum orci. Suspendisse sed erat metus. <br />
  </div>
)

const modalHeaderProps = {
  // color: '#ffbf00',
}

const modalBodyProps = {
  // color: '#ffbf00',
}

const modalFooterProps = {
  // color: '#ffbf00',
}

export const Default = (args: ModalProps) => (
  <Modal {...args}>
    <ModalHeader {...modalHeaderProps}>Lorem Ipsum</ModalHeader>
    <ModalBody {...modalBodyProps}>{bodyCntent}</ModalBody>
    <ModalFooter {...modalFooterProps}>
      Generated 5 paragraphs, 477 words, 3297 bytes of Lorem Ipsum
    </ModalFooter>
  </Modal>
)

Default.args = {
  show: true
}

export const RightOrientation = Template.bind({})
RightOrientation.args = {
  show: false,
  showCloseButton: false,
  modalHeader: 'Lorem Ipsum',
  modalHeaderProps: {
    textAlign: 'right'
  },
  modalBody: bodyCntent,
  modalBodyProps: {
    textAlign: 'right'
  },
  modalFooter: 'Generated 5 paragraphs, 477 words, 3297 bytes of Lorem Ipsum',
  modalFooterProps: {
    textAlign: 'right'
  }
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  show: false,
  modalHeader: 'Lorem Ipsum',
  modalHeaderProps: {
    textAlign: 'left',
    color: '#ffbf00'
  },
  modalBody: bodyCntent,
  modalBodyProps: {
    textAlign: 'left',
    color: '#046c75'
  },
  modalFooter: 'Generated 5 paragraphs, 477 words, 3297 bytes of Lorem Ipsum',
  modalFooterProps: {
    textAlign: 'left',
    color: '#CC3C21'
  }
}

export const CloseOnlyOnButton = Template.bind({})
CloseOnlyOnButton.args = {
  show: false,
  showCloseButton: false,
  closeOnlyOnButton: true,
  modalHeader: 'Lorem Ipsum',
  modalHeaderProps: {
    textAlign: 'left'
  },
  modalBody: bodyCntent,
  modalBodyProps: {
    textAlign: 'left'
  },
  modalFooter: 'Generated 5 paragraphs, 477 words, 3297 bytes of Lorem Ipsum',
  modalFooterProps: {
    textAlign: 'left'
  }
}

export const AnimatedAnimation = Template.bind({})
AnimatedAnimation.args = {
  show: false,
  animation: 'slideTop',
  ariaLabel: 'animated-modal',
  ariaLabelledby: 'dialog_header_lorem',
  showCloseButton: false,
  closeOnlyOnButton: false,
  modalHeader: 'Lorem Ipsum',
  modalHeaderProps: {
    id: 'dialog_header_lorem',
    textAlign: 'left'
  },
  modalBody: bodyCntent,
  modalBodyProps: {
    textAlign: 'left'
  },
  modalFooter: 'Generated 5 paragraphs, 477 words, 3297 bytes of Lorem Ipsum',
  modalFooterProps: {
    textAlign: 'left'
  }
}
