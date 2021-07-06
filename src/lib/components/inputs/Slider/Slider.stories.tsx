import { Story } from '@storybook/react'
import React from 'react'
import { Slider, SliderProps } from './Slider'

export default {
  title: 'Components/Inputs/Slider',
  component: Slider
}

const Template = (args: SliderProps) => <Slider {...args} />

export const Default: Story<SliderProps> = Template.bind({})
Default.args = {
  orientation: 'horizontal',
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

export const VerticalSlider: Story<SliderProps> = Template.bind({})
VerticalSlider.args = {
  label: 'Label',
  labelPosition: 'left',
  orientation: 'vertical',
  min: -100,
  max: 100,
  minLabel: '-',
  maxLabel: '+'
}

export const TopLabelVerticalSlider: Story<SliderProps> = Template.bind({})
TopLabelVerticalSlider.args = {
  label: 'Label',
  labelPosition: 'top',
  orientation: 'vertical',
  min: -100,
  max: 100
}

export const RightLabelVerticalSlider: Story<SliderProps> = Template.bind({})
RightLabelVerticalSlider.args = {
  label: 'Label',
  labelPosition: 'right',
  orientation: 'vertical',
  min: -100,
  max: 100,
  minLabel: 'min',
  maxLabel: 'max'
}

export const BottomLabelVerticalSlider: Story<SliderProps> = Template.bind({})
BottomLabelVerticalSlider.args = {
  label: 'Label',
  labelPosition: 'bottom',
  orientation: 'vertical',
  min: -100,
  max: 100
}
