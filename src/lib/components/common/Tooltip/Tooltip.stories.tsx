import { Story } from '@storybook/react'
import React from 'react'
import { Tooltip, TooltipProps } from './Tooltip'
import { TooltipTarget } from './Tooltip.styles'

export default {
  title: 'components/Tooltip',
  component: Tooltip
}

const Template = (props: TooltipProps) => {
  return (
    <Tooltip label="This is a tooltip" position="top">
      <div style={{ height: '50px', width: '50px', backgroundColor: 'black' }}>I am target</div>
    </Tooltip>
  )
}
export const Default: Story = Template.bind({})

const Bottom = (props: TooltipProps) => {
  return (
    <Tooltip label="This is a tooltip" position="bottom">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </Tooltip>
  )
}
export const BottomTooltip: Story = Bottom.bind({})

const Left = (props: TooltipProps) => {
  return (
    <Tooltip label="This is a tooltip" position="left">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </Tooltip>
  )
}
export const LeftTooltip: Story = Left.bind({})

const Right = (props: TooltipProps) => {
  return (
    <Tooltip label="This is a tooltip" position="right">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </Tooltip>
  )
}
export const RightTooltip: Story = Right.bind({})
