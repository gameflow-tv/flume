import { Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Slider, SliderProps } from './Slider'

export default {
  title: 'Components/Inputs/Slider',
  component: Slider
}

const Template = (args: SliderProps) => <Slider {...args} />

export const Default: Story<SliderProps> = Template.bind({})
Default.args = {
  label: 'Label',
  min: -100,
  max: 100,
  minLabel: '-',
  maxLabel: '+'
}

export const TopLabelSlider: Story<SliderProps> = Template.bind({})
TopLabelSlider.args = {
  label: 'Label',
  labelPosition: 'top'
}

export const RightLabelSlider: Story<SliderProps> = Template.bind({})
RightLabelSlider.args = {
  label: 'Label',
  labelPosition: 'right'
}

export const BottomLabelSlider: Story<SliderProps> = Template.bind({})
BottomLabelSlider.args = {
  label: 'Label',
  labelPosition: 'bottom'
}

export const LeftLabelSlider: Story<SliderProps> = Template.bind({})
LeftLabelSlider.args = {
  label: 'Label',
  labelPosition: 'left'
}

const FixedHorizontal = styled.div`
  width: 700px;
  height: 100px;
`

export const FixedHorizontalSize = (args: SliderProps) => (
  <FixedHorizontal>
    <Slider {...args} />
  </FixedHorizontal>
)
FixedHorizontalSize.args = {
  label: 'Label',
  labelPosition: 'left',
  min: -100,
  max: 100,
  minLabel: '-',
  maxLabel: '+'
}
