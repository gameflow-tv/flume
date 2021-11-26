import { Story } from '@storybook/react'
import React from 'react'
import { Toast, ToastProps } from '.'

export default {
  title: 'Components/Notifications/Toast',
  component: Toast,
  argTypes: {
    horizontalAlign: {
      options: ['left', 'middle', 'right'],
      control: { type: 'radio' },
      defaultValue: 'middle'
    },
    verticalAlign: {
      options: ['top', 'middle', 'bottom'],
      control: { type: 'radio' },
      defaultValue: 'top'
    }
  }
}

const Template = (args: ToastProps) => <Toast {...args} />

export const Default: Story<ToastProps> = Template.bind({})
Default.args = {
  children: <p style={{ margin: 0 }}>Link copied to clipboard</p>
}

export const MiddlePos: Story<ToastProps> = Template.bind({})
MiddlePos.args = {
  children: <p style={{ margin: 0 }}>Link copied to clipboard</p>,
  horizontalAlign: 'middle',
  verticalAlign: 'bottom'
}

export const LongEffect: Story<ToastProps> = Template.bind({})
LongEffect.args = {
  children: <p style={{ margin: 0 }}>Link copied to clipboard</p>,
  animation: {
    slideInTime: 1.5,
    visibilityTime: 5,
    slideOutTime: 2
  }
}
