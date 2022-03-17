import { Story } from '@storybook/react'
import React from 'react'
import { Marquee, MarqueeProps } from '.'
import { Icon, IconData, IconName } from '../../icons'

export default {
  title: 'Components/Common/Marquee',
  component: Marquee,
  parameters: {
    layout: 'fullscreen'
  }
}

const icons = Object.keys(IconData).map((key) => (
  <p>
    <Icon key={key} icon={key as IconName} size="large" color="white" />
    &nbsp;
    {key}
  </p>
))

const longLorem = (
  <p style={{ color: '#f1c3c3', whiteSpace: 'nowrap' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat bibendum vehicula. Cras
    et eros vitae velit commodo volutpat ac eget ex. Donec sed felis scelerisque, scelerisque nisl
    non, maximus nunc.
  </p>
)

const shortLorem = (
  <p style={{ color: '#f1c3c3', whiteSpace: 'nowrap' }}>Lorem ipsum dolor sit amet.</p>
)

const DefaultTemplate = (args: MarqueeProps) => {
  return <Marquee {...args} />
}

const BoxTemplate = (args: MarqueeProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '300px',
        height: '50px',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Marquee {...args} />
    </div>
  )
}

export const Default: Story<MarqueeProps> = DefaultTemplate.bind({})
Default.args = {
  children: <div style={{ color: 'white', display: 'flex', gap: '32px' }}>{icons}</div>,
  duration: 120
}

export const ShortText: Story<MarqueeProps> = DefaultTemplate.bind({})
ShortText.args = {
  children: shortLorem,
  duration: 15
}

export const LongText: Story<MarqueeProps> = DefaultTemplate.bind({})
LongText.args = {
  children: longLorem,
  duration: 25
}

export const ShortTextInBox: Story<MarqueeProps> = BoxTemplate.bind({})
ShortTextInBox.args = {
  children: shortLorem,
  duration: 15
}

export const LongTextInBox: Story<MarqueeProps> = BoxTemplate.bind({})
LongTextInBox.args = {
  children: longLorem,
  duration: 25
}