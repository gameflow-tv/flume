import { Story } from '@storybook/react'
import React from 'react'
import { Input, InputProps } from './Input'
import { PasswordProps } from './password/Password'

export default {
  title: 'Components/Inputs/Basic',
  component: Input
}

const Template = (args: InputProps | PasswordProps) => <Input {...args} />

export const Text: Story = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Username'
}

export const RequiredField: Story = Template.bind({})
RequiredField.args = {
  type: 'text',
  required: true,
  requiredErrorType: 'error'
}

export const WarningField: Story = Template.bind({})
WarningField.args = {
  type: 'text',
  required: true,
  requiredErrorType: 'warning'
}

export const SuccessField: Story = Template.bind({})
SuccessField.args = {
  type: 'text',
  required: true,
  requiredErrorType: 'success'
}

export const Password: Story = Template.bind({})
Password.args = {
  type: 'password',
  required: true,
  label: 'Password'
}

export const Checkbox: Story = Template.bind({})
Checkbox.args = {
  type: 'checkbox'
}
