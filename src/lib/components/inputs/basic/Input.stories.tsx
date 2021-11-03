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

export const Disabled: Story = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: 'Username',
  disabled: true
}

export const RequiredField: Story = Template.bind({})
RequiredField.args = {
  type: 'text',
  required: true
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
  label: 'E-mail'
}

export const NonRequiredEmail: Story = Template.bind({})
NonRequiredEmail.args = {
  type: 'email',
  label: 'E-mail'
}

export const MultipleCriteria: Story = Template.bind({})
MultipleCriteria.args = {
  type: 'password',
  required: true,
  label: 'Multiple Criteria',
  multipleCriteriaInfo: true,
  criteria: [
    {
      invalidMessage: 'Please fill in this field',
      invalidResponseType: 'error',
      validMessage: 'Please fill in this field',
      validResponseType: 'none',
      condition: { type: 'required' }
    },
    {
      invalidMessage: 'Longer than 6 characters',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'min', rule: 6 }
    },
    {
      invalidMessage: 'Not less than 9 characters',
      invalidResponseType: 'warning',
      validResponseType: 'success',
      condition: { type: 'min', rule: 9 }
    },
    {
      invalidMessage: 'Up to 12 characters',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'max', rule: 12 }
    }
    /* {
      invalidMessage: 'Contains at least 1 lowercase letter',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp(/^(?=.*?[a-z]).{1,}$/) }
    },
    {
      invalidMessage: 'Contains at least 1 uppercase letter',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp(/^(?=.*?[A-Z]).{1,}$/) }
    },
    {
      invalidMessage: 'Contains at least 1 number',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp(/^(?=.*?[0-9]).{1,}$/) }
    },
    {
      invalidMessage: 'Contains at least 1 of %, &, /, ! or ?',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp(/^(?=.*?[!%&/?]).{1,}$/) }
    } */
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
