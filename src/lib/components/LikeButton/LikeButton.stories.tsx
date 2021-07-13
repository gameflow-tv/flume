import { Story } from '@storybook/react'
import React from 'react'
import { LikeButton, LikeButtonProps } from './LikeButton'

export default {
  title: 'Components/Buttons/LikeButton',
  component: LikeButton
}

const Template = (args: LikeButtonProps) => <LikeButton {...args}/>

export const Like: Story<LikeButtonProps> = Template.bind({})
Like.args = {
  
}