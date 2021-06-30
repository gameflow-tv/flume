import { TextInput, TextInputProps } from './'
import { Story } from '@storybook/react'

export default {
  title: 'Components/Inputs/TextInput',
  component: TextInput
}

const Template = (args: TextInputProps) => <TextInput {...args} />

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
