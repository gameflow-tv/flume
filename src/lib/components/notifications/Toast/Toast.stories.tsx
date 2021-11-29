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
    },
    animation: {
      slideDirection: {
        options: ['fromTop', 'fromBottom', 'fromLeft', 'fromRight'],
        control: { type: 'radio' },
        defaultValue: 'fromTop'
      }
    }
  }
}

const Template = (args: ToastProps) => <Toast {...args} />

export const Default: Story<ToastProps> = Template.bind({})
Default.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam
      ut nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
      aspernatur sit, vero architecto dignissimos. Eligendi, minima
    </p>
  ),
  horizontalAlign: 'left',
  verticalAlign: 'top'
}

export const FromRight: Story<ToastProps> = Template.bind({})
FromRight.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam
      ut nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
      aspernatur sit, vero architecto dignissimos. Eligendi, minima'
    </p>
  ),
  horizontalAlign: 'right',
  verticalAlign: 'bottom'
}

export const FromBottom: Story<ToastProps> = Template.bind({})
FromBottom.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam
      ut nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
      aspernatur sit, vero architecto dignissimos. Eligendi, minima'
    </p>
  ),
  horizontalAlign: 'middle',
  verticalAlign: 'bottom'
}

export const FromLeft: Story<ToastProps> = Template.bind({})
FromLeft.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam
      ut nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
      aspernatur sit, vero architecto dignissimos. Eligendi, minima'
    </p>
  ),
  horizontalAlign: 'middle',
  verticalAlign: 'bottom'
}

export const LongEffect: Story<ToastProps> = Template.bind({})
LongEffect.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam
      ut nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
      aspernatur sit, vero architecto dignissimos. Eligendi, minima
    </p>
  ),
  animation: {
    slideInTime: 1.5,
    visibilityTime: 5,
    slideOutTime: 2
  }
}
