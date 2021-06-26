import React from 'react'

import { Meta, Story } from '@storybook/react'

import { ButtonProps } from '@components/buttons'
import PrimaryButton from '@components/buttons/PrimaryButton'

export default {
  title: 'Components/Buttons/PrimaryButton',
  component: PrimaryButton,
} as Meta

const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />

export const Large = Template.bind({})
Large.args = {
  children: <p>Button</p>,
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  children: <p>Button</p>,
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  children: <p>Button</p>,
  size: 'small',
}
