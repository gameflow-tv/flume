import { Story } from '@storybook/react'
import React from 'react'
import { Slider, SliderProps } from './Slider'

export default {
  title: 'Components/Inputs/Slider',
  component: Slider
}

const Template = (args: SliderProps) => <Slider {...args} />
export const Default: Story = Template.bind({})

// export const Default: Story = Template.bind({
// orientation: 'horizontal'
// })
