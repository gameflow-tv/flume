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
  type: 'text'
}

export const Password: Story = Template.bind({})
Password.args = {
  type: 'password'
}

export const Checkbox: Story = Template.bind({})
Checkbox.args = {
  type: 'checkbox'
}
