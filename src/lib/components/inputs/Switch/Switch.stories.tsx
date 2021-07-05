import { Story } from '@storybook/react'
import React from 'react'
import { Switch, SwitchProps } from './Switch'

export default {
  title: 'Components/Inputs/Switch',
  component: Switch
}

const Template = (args: SwitchProps) => <Switch {...args} />

export const ToggledSwitch: Story<SwitchProps> = Template.bind({})
ToggledSwitch.args = {
  checked: true,
  label: 'On'
}

export const UntoggledSwitch: Story<SwitchProps> = Template.bind({})
UntoggledSwitch.args = {
  checked: false
}
