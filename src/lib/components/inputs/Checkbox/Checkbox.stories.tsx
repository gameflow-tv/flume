import { Story } from '@storybook/react'
import React from 'react'
import { Icon } from '../..'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox
}

const Template = (args: CheckboxProps) => <Checkbox {...args} />

export const Default: Story<CheckboxProps> = Template.bind({})
Default.args = {}

export const CheckedCheckbox: Story<CheckboxProps> = Template.bind({})
CheckedCheckbox.args = {
  checked: true
}

export const LetterAsMark: Story<CheckboxProps> = Template.bind({})
LetterAsMark.args = {
  checkedContent: <p>c</p>,
  uncheckedContent: <p>u</p>,
  typography: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    lineHeight: 1.3,
    fontWeight: 200
  }
}

export const CustomIcon: Story<CheckboxProps> = Template.bind({})
CustomIcon.args = {
  checkedContent: <Icon icon="swords_filled" />,
  uncheckedContent: <Icon icon="swords" />
}

export const CustomSize: Story<CheckboxProps> = Template.bind({})
CustomSize.args = {
  width: '51px',
  height: '51px',
  typography: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    lineHeight: 1.3,
    fontWeight: 600
  }
}

export const CustomColor: Story<CheckboxProps> = Template.bind({})
CustomColor.args = {
  uncheckedBackground: '#360A14',
  uncheckedBorder: '#961D4E',
  uncheckedTextColor: '#FCB9B2',
  uncheckedContent: <Icon icon="swords" />,
  checkedTextColor: 'white',
  checkedBackground: '#2196F3',
  checkedBorder: '#ffbf00'
}

export const EmptyContent: Story<CheckboxProps> = Template.bind({})
EmptyContent.args = {
  uncheckedContent: '',
  checkedContent: ''
}
