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
      <div style={{ height: '50px', width: '50px', border: '1px solid red' }}>I am target</div>
    </TooltipAlt>
  )
}
export const Default: Story = Template.bind({})
