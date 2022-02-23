import { Story } from '@storybook/react'
import React from 'react'
import { Calendar } from './Calendar'

export default {
  title: 'components/inputs/Calendar',
  component: Calendar
}

const Template = (args) => <Calendar story={true} {...args} />
export const Default: Story = Template.bind({})
Default.args = {
  width: '328px'
}
