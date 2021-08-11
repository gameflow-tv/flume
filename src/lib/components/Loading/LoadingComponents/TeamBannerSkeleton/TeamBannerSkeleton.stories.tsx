import { TeamBannerSkeleton, TeamBannerProps } from './TeamBannerSkeleton'
import { Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/Loading/TeamBannerSkeleton',
  component: TeamBannerSkeleton
}

const Template: Story<TeamBannerProps> = (args) => <TeamBannerSkeleton {...args} />

export const Banner: Story = Template.bind({})
Banner.args = {}
