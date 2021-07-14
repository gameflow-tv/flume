import { LoadingSkeleton } from './LoadingSkeleton'
import { Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Loading/LoadingSkeleton',
  component: LoadingSkeleton
}

const Template = () => <LoadingSkeleton />

export const Loading: Story = Template.bind({})
Loading.args = {
  
}
