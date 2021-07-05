import { TextInput, TextInputProps } from './'
import { Story } from '@storybook/react'
import React from 'react'
import { Switch, SwitchProps } from './Switch'

export default {
  title: 'Components/Inputs/TextInput',
  component: TextInput
}

const Template = (args: TextInputProps) => <TextInput {...args} />

const SwitchTemplate = (args: SwitchProps) => <Switch {...args} />

export const ToggledSwitch: Story<SwitchProps> = SwitchTemplate.bind({})
ToggledSwitch.args = {
  checked: true
}

export const UntoggledSwitch: Story<SwitchProps> = SwitchTemplate.bind({})
UntoggledSwitch.args = {
  checked: false
}

export const Text: Story<TextInputProps> = Template.bind({})
Text.args = {
  placeholder: 'Username-0',
  type: 'text'
}

export const Text1: Story<TextInputProps> = Template.bind({})
Text1.args = {
  placeholder: 'Username-1',
  type: 'text',
  criteria: [
    {
      criteria: 'Longer than 6 characters',
      fulfilled: false
    },
    {
      criteria: 'Is not Tobinator',
      fulfilled: true
    }
  ]
}
