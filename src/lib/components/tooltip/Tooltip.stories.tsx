import { Story } from '@storybook/react'
import React from 'react'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'components/Tooltip',
  component: Tooltip
}
// export const TooltipStory: Story = () => <Tooltip />

const Template = (args: TooltipProps) => <Tooltip {...args} />

export const Default: Story<TooltipProps> = Template.bind({})
Default.args = {
  content: 'Storybook text'
}

export const top: Story<TooltipProps> = Template.bind({})
top.args = {
  content: 'Storybook text',
  position: 'top'
}

export const left: Story<TooltipProps> = Template.bind({})
left.args = {
  content: 'Storybook text',
  position: 'left'
}

export const right: Story<TooltipProps> = Template.bind({})
right.args = {
  content: 'Storybook text',
  position: 'right'
}
