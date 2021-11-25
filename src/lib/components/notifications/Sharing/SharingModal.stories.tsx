import * as React from 'react'
import { Story } from '@storybook/react'
import { SharingModal, SharingModalProps } from './SharingModal'

export default {
  title: 'Components/Notifications/SharingModal',
  component: SharingModal
}

const Template = (args) => <SharingModal {...args} />
export const Default: Story<SharingModalProps> = Template.bind({})

export const CustomValue: Story<SharingModalProps> = Template.bind({})
CustomValue.args = {
  link: 'https://gameflow.tv/',
  facebook: {
    app_id: 427532265538385,
    display: 'popup',
    hashtag: ['gameflow', 'gameflow-tv', 'watch live']
  },
  twitter: {
    related: 'gameflowtv',
    text: 'Sharing on Twitter',
    hashtags: ['gameflow', 'gameflowtv', 'watch live']
  }
}
