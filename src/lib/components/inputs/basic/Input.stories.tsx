import { Story } from '@storybook/react'
import React from 'react'
import { Input } from './Input'
import { PasswordProps } from './password/Password'
import { InputProps } from './shared/input.definitions'

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
  criteria: {
    invalidMessage: 'Please fill in this field',
    invalidResponseType: 'error',
    validMessage: 'Well done!',
    validResponseType: 'success',
    condition: { type: 'required' }
  }
}

export const WarningField: Story = Template.bind({})
WarningField.args = {
  type: 'text',
  required: true,
  requiredErrorType: 'warning'
}

export const Email: Story = Template.bind({})
Email.args = {
  type: 'email',
  required: true,
  label: 'E-mail',
  multipleCriteriaInfo: false,
  criteria: [
    {
      invalidMessage: 'Please fill in this field',
      invalidResponseType: 'error',
      validMessage: 'Voce inseriu algo! Genio!',
      validResponseType: 'success',
      condition: { type: 'required' }
    },
    {
      invalidMessage: 'Please fill with a valid e-mail address',
      invalidResponseType: 'error',
      validMessage: 'Voce digitou um e-mail!',
      validResponseType: 'success',
      condition: { type: 'email' }
    }
  ]
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
