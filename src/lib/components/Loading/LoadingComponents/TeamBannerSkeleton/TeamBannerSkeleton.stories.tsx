import { TeamBannerSkeleton } from './TeamBannerSkeleton'
import { Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Loading/TeamBannerSkeleton',
  component: TeamBannerSkeleton
}

const Template = () => <TeamBannerSkeleton />

export const Banner: Story = Template.bind({})
Banner.args = {
  
}
