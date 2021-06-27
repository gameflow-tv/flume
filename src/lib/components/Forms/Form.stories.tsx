import { TextInput, TextInputProps, TextInputCriteria } from '@components/Forms'
import { Story } from '@storybook/react'

export default {
  title: 'Components/Form/TextInput',
  component: TextInput
}

const Template = (args: TextInputProps) => <TextInput {...args} />

export const Text: Story<TextInputProps> = Template.bind({})
Text.args = {
  placeholder: 'Username',
  type: 'text'
}

export const Text1: Story<TextInputProps> = Template.bind({})
Text1.args = {
  placeholder: 'Username',
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
