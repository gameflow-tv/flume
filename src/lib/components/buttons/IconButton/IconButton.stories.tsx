import { faInfo } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  icon: faInfo
}

export const Medium: Story<IconButtonProps> = Template.bind({})
Medium.args = {
  size: 'medium',
  icon: faInfo
}

export const Small: Story<IconButtonProps> = Template.bind({})
Small.args = {
  size: 'small',
  icon: faInfo
}
