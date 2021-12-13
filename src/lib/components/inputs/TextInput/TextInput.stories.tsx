import { TextInput, TextInputProps } from './'
import { Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Inputs/TextInput',
  component: TextInput
}

const Template = (args: TextInputProps) => <TextInput {...args} />

export const Basic: Story<TextInputProps> = Template.bind({})
Basic.args = {
  placeholder: 'Username-0',
  type: 'text'
}

export const WithLabel: Story<TextInputProps> = Template.bind({})
WithLabel.args = {
  label: 'Username',
  placeholder: 'Username',
  type: 'text'
}
