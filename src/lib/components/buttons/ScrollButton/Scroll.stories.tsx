import { Story } from '@storybook/react'
import React from 'react'
import { ScrollButton } from './ScrollButton'

export default {
  title: 'Components/Buttons/ScrollButton',
  component: ScrollButton
}

const Template = () => <ScrollButton  />

export const Scroll: Story = Template.bind({})
Scroll.args = {
  
}