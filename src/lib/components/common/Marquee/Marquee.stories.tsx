import { Story } from '@storybook/react'
import React from 'react'
import { Marquee, MarqueeProps } from '.'

export default {
  title: 'Components/Common/Marquee',
  component: Marquee,
  parameters: {
    layout: 'fullscreen'
  }
}

const lorem = (
  <p style={{ color: 'white' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat bibendum vehicula. Cras
    et eros vitae velit commodo volutpat ac eget ex. Donec sed felis scelerisque, scelerisque nisl
    non, maximus nunc.
  </p>
)

const Template = (args: MarqueeProps) => {
  return (
    // <div style={{ position: 'relative', width: '100%', height: '100px', backgroundColor: 'black' }}>
    <Marquee {...args} />
    // </div>
  )
}

export const Default: Story<MarqueeProps> = Template.bind({})
Default.args = {
  children: lorem,
  duration: 10
}
