import { Story } from '@storybook/react'
import React from 'react'
import { Input } from './Input'
import { PasswordProps } from './password/Password'
import { SelectProps, Option } from './select/Select'
import { InputProps } from './shared/Input.definitions'

export default {
  title: 'Components/Inputs/Basic',
  component: Input
}

const itemsData = [
  { value: 'item_1', label: 'Item 1', game: null },
  { value: 'item_2', label: 'Item 2', game: null },
  { value: 'item_3', label: 'Item 3', game: null },
  { value: 'item_4', label: 'Item 4', game: null },
  { value: 'item_5', label: 'Item 5', game: null },
  { value: 'item_6', label: 'Item 6', game: null },
  { value: 'item_7', label: 'Item 7', game: null },
  { value: 'item_8', label: 'Item 8', game: null },
  { value: 'item_9', label: 'Item 9', game: null },
  { value: 'item_10', label: 'Item 10', game: null }
]

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
    },
    {
      invalidMessage: 'Contains at least 1 lowercase letter',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp(/^(?=.*?[a-z]).{1,}$/) }
    },
    {
      invalidMessage: 'Contains at least 1 uppercase letter',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp('^(?=.*?[A-Z]).{1,}$') }
    },
    {
      invalidMessage: 'Contains at least 1 number',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp('^(?=.*?[0-9]).{1,}$') }
    },
    {
      invalidMessage: 'Contains at least 1 of %, &, /, ! or ?',
      invalidResponseType: 'error',
      validResponseType: 'success',
      condition: { type: 'regex', rule: new RegExp('^(?=.*?[!%&/?]).{1,}$') }
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

export const SingleSelect = (args: SelectProps) => (
  <>
    <Input {...args}>
      {itemsData.map((itm, idx) => (
        <Option key={idx} label={itm.label} value={itm.value}>
          {itm.label}
        </Option>
      ))}
    </Input>
    <Input {...args}>
      {itemsData.map((itm, idx) => (
        <Option key={idx} label={itm.label} value={itm.value} selected={idx === 3}>
          {itm.label}
        </Option>
      ))}
    </Input>
  </>
)

SingleSelect.args = {
  type: 'select',
  label: 'Single select use',
  placeholder: 'Choose your item...'
}

export const Search: Story = Template.bind({})
Search.args = {
  type: 'search'
}
