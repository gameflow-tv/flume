import { Story } from '@storybook/react'
import React, { FormEvent, FormEventHandler, SyntheticEvent, useState } from 'react'
import { Input } from './Input'
import { InputProps } from './shared'

export default {
  title: 'Components/Inputs/Basic',
  component: Input
}

const Template: Story<InputProps> = (args: InputProps) => (
  <form>
    <Input {...args} />
  </form>
)

export const Text: Story = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: 'Username'
}

export const ReadOnlyTextInput: Story = Template.bind({})
ReadOnlyTextInput.args = {
  type: 'text',
  placeholder: 'Username',
  readOnly: true,
  value: 'Lasagne boy'
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
  required: true,
  placeholder: 'Required Field'
}

export const RequiredAsWarning: Story = Template.bind({})
RequiredAsWarning.args = {
  type: 'text',
  required: true,
  placeholder: 'Required as a warning',
  criteria: [
    {
      invalidMessage: 'Please fill in this field',
      invalidResponseType: 'warning',
      validMessage: '',
      validResponseType: 'none',
      condition: { type: 'required' }
    }
  ]
}

export const Email: Story = Template.bind({})
Email.args = {
  type: 'email',
  required: true,
  label: 'E-mail',
  placeholder: 'Insert email'
}

export const NonRequiredEmail: Story = Template.bind({})
NonRequiredEmail.args = {
  type: 'email',
  label: 'E-mail',
  placeholder: 'Insert email'
}

export const MultipleCriteria: Story = Template.bind({})
MultipleCriteria.args = {
  type: 'password',
  autoComplete: 'new-password',
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

const customValidationExampleFunc = (args: any): boolean => {
  if (parseInt(args) === 6) {
    return true
  }
  return false
}
export const CustomCriteria: Story = Template.bind({})
CustomCriteria.args = {
  type: 'text',
  label: 'Custom Criteria',
  criteria: [
    {
      invalidMessage: 'Example function checking the field value number is equal 6',
      invalidResponseType: 'warning',
      validMessage: 'Value is equal 6',
      validResponseType: 'success',
      condition: { type: 'function', rule: customValidationExampleFunc }
    }
  ]
}

export const Password: Story = Template.bind({})
Password.args = {
  type: 'password',
  required: true,
  label: 'Password',
  placeholder: 'Insert password',
  autoComplete: 'new-password'
}

export const Checkbox: Story = Template.bind({})
Checkbox.args = {
  type: 'checkbox'
}

export const Search: Story = Template.bind({})
Search.args = {
  type: 'search',
  required: true,
  placeholder: 'Type your search'
}

export const AutoComplete: Story = Template.bind({})
AutoComplete.args = {
  type: 'email',
  id: 'emailInput',
  label: 'E-mail',
  required: true,
  placeholder: 'Type your search',
  autoComplete: 'email'
}

export const Conditional: Story<InputProps> = (args: InputProps) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
        defaultChecked={isChecked}
      />
      <Input
        {...args}
        criteria={[
          {
            invalidMessage: 'Display name is already taken',
            invalidResponseType: 'error',
            validMessage: 'Display name is available',
            validResponseType: 'success',
            condition: {
              type: 'condition',
              rule: isChecked
            },
            nonBlocking: false
          }
        ]}
      />
    </>
  )
}
Conditional.args = {
  type: 'text',
  id: 'none',
  label: 'text',
  placeholder: 'Type your search',
  autoComplete: 'email'
}
