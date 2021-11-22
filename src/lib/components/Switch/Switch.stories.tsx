import { Story } from '@storybook/react'
import React from 'react'
import { Switch, SwitchProps } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch
}

const Template = (args: SwitchProps) => <Switch {...args} />

export const ToggledSwitch: Story<SwitchProps> = Template.bind({})
ToggledSwitch.args = {
  checked: true,
  label: 'Label'
}

export const UntoggledSwitch: Story<SwitchProps> = Template.bind({})
UntoggledSwitch.args = {
  checked: false,
  label: 'Label'
}

export const TopLabelSwitch: Story<SwitchProps> = Template.bind({})
TopLabelSwitch.args = {
  checked: true,
  label: 'Label',
  labelPosition: 'top'
}

export const RightLabelSwitch: Story<SwitchProps> = Template.bind({})
RightLabelSwitch.args = {
  checked: true,
  label: 'Label',
  labelPosition: 'right'
}

export const BottomLabelSwitch: Story<SwitchProps> = Template.bind({})
BottomLabelSwitch.args = {
  checked: true,
  label: 'Label',
  labelPosition: 'bottom'
}
