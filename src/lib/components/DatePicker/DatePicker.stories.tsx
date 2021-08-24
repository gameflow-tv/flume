import { Story } from '@storybook/react'
import React from 'react'
import { DatePicker, DatePickerProps } from './DatePicker'

export default {
  title: 'Components/DatePicker',
  component: DatePicker
}

const Template = (args: DatePickerProps) => <DatePicker {...args} />

export const Default: Story = Template.bind({})
Default.args = {}
