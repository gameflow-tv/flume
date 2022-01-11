import { Story } from '@storybook/react'
import React, { useState } from 'react'
import { DatePicker, DatePickerProps } from './DatePicker'

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker
}

const Template = (args: DatePickerProps) => <DatePicker {...args} />

export const Default: Story = Template.bind({})
Default.args = {}

export const ExternalContol: Story = (args: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div>
      <label style={{ color: 'white' }}>{selectedDate.toISOString()}</label>
      <br />
      <br />
      <DatePicker onDateChange={setSelectedDate} />
    </div>
  )
}