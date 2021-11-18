import * as React from 'react'
import { Story } from '@storybook/react'
import { SharingModal } from './SharingModal'

export default {
  title: 'Components/Notifications/SharingModal',
  component: SharingModal
}

const Template = (args) => <SharingModal {...args} />
export const Default: Story = Template.bind({})
