import { Story } from '@storybook/react'
import React from 'react'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton
}

const Template = (args: IconButtonProps) => <IconButton {...args} />

export const Large: Story<IconButtonProps> = Template.bind({})
Large.args = {
  size: 'large',
  icon: 'share'
}

export const Medium: Story<IconButtonProps> = Template.bind({})
Medium.args = {
  size: 'medium',
  icon: 'share'
}

export const Small: Story<IconButtonProps> = Template.bind({})
Small.args = {
  size: 'small',
  icon: 'share'
}

export const FlumeIcon: Story<IconButtonProps> = Template.bind({})
FlumeIcon.args = {
  size: 'large',
  icon: 'share'
}
