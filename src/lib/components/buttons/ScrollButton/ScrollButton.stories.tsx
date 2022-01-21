import { Story } from '@storybook/react'
import React from 'react'
import { Ambiance } from '../../../providers'
import { ScrollButton } from './ScrollButton'

export default {
  title: 'Components/Buttons/ScrollButton',
  component: ScrollButton
}

const Template = () => (
  <Ambiance>
    <ScrollButton />
  </Ambiance>
)

export const Scroll: Story = Template.bind({})
Scroll.args = {}
