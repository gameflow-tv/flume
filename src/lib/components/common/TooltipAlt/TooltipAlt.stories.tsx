import { Story } from '@storybook/react'
import React from 'react'
import { TooltipAlt, TooltipAltProps } from './TooltipAlt'
import { TooltipTarget } from './TooltipAlt.styles'

export default {
  title: 'components/TooltipAlt',
  component: TooltipAlt
}

const Template = (props: TooltipAltProps) => {
  return (
    <TooltipAlt label="This is a tooltip" position="top">
      <div style={{ height: '50px', width: '50px', backgroundColor: 'black' }}>I am target</div>
    </TooltipAlt>
  )
}
export const Default: Story = Template.bind({})

const Bottom = (props: TooltipAltProps) => {
  return (
    <TooltipAlt label="This is a tooltip" position="bottom">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </TooltipAlt>
  )
}
export const BottomTooltip: Story = Bottom.bind({})

const Left = (props: TooltipAltProps) => {
  return (
    <TooltipAlt label="This is a tooltip" position="left">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </TooltipAlt>
  )
}
export const LeftTooltip: Story = Left.bind({})

const Right = (props: TooltipAltProps) => {
  return (
    <TooltipAlt label="This is a tooltip" position="right">
      <div style={{ height: '100px', width: '100px', backgroundColor: 'black' }}>I am target</div>
    </TooltipAlt>
  )
}
export const RightTooltip: Story = Right.bind({})
