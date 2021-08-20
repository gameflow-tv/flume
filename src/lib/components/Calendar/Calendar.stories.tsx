import { Story } from '@storybook/react'
import React from 'react'
import { Calendar } from './Calendar'

export default {
  title: 'Components/Calendar',
  component: Calendar
}

const Template = (args) => (
  <div style={{ width: '328px', height: '314px' }}>
    <Calendar {...args} />
  </div>
)
export const Default: Story = Template.bind({})
Default.args = {
  // dayBoxBgColor: '#00805c61'
}

export const EmptyDisabledDays: Story = Template.bind({})
EmptyDisabledDays.args = {
  dayCellDisabledTxt: ''
  // dayBoxBgColor: '#00805c61'
}
