import { MatchSkeleton } from './MatchSkeleton'
import { Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Loading/MatchSkeleton',
  component: MatchSkeleton
}

const Template = () => <MatchSkeleton />

export const Match: Story = Template.bind({})
Match.args = {}
