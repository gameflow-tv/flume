import { Story } from '@storybook/react'
import React from 'react'
import { ScrollButton } from './ScrollButton'

export default {
  title: 'components/buttons/ScrollButton',
  component: ScrollButton
}

const Template = () => <ScrollButton visible />

export const Scroll: Story = Template.bind({})
Scroll.args = {}
