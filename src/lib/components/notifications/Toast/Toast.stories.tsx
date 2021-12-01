import { Story } from '@storybook/react'
import React, { useRef } from 'react'
import { Toast, ToastProps } from '.'
import { Button } from '../../buttons/Button'

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

const lorem = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi. Distinctio quisquam ut
    nesciunt expedita temporibus dolorum dolore voluptate vitae numquam, aliquam quibusdam,
    aspernatur sit, vero architecto dignissimos. Eligendi, minima
  </p>
)

const Template = (args: ToastProps) => {
  const refToastRef = useRef(null)
  return (
    <div>
      <Toast ref={refToastRef} {...args} />
      <Button
        variant="primary"
        size="large"
        label="Show Toast"
        onClick={() => refToastRef.current?.dispatchShow()}
      />
    </div>
  )
}

export const Default: Story<ToastProps> = Template.bind({})
Default.args = {
  children: lorem
}

export const MidRight: Story<ToastProps> = Template.bind({})
MidRight.args = {
  children: lorem,
  horizontalAlign: 'right',
  verticalAlign: 'middle'
}
export const VerticalBottom: Story<ToastProps> = Template.bind({})
VerticalBottom.args = {
  children: lorem,
  horizontalAlign: 'right',
  verticalAlign: 'bottom'
}
export const TopLeft: Story<ToastProps> = Template.bind({})
TopLeft.args = {
  children: lorem,
  horizontalAlign: 'left',
  verticalAlign: 'top'
}

export const MidBottom: Story<ToastProps> = Template.bind({})
MidBottom.args = {
  children: lorem,
  horizontalAlign: 'middle',
  verticalAlign: 'bottom'
}

export const Middle: Story<ToastProps> = Template.bind({})
Middle.args = {
  children: lorem,
  horizontalAlign: 'middle',
  verticalAlign: 'middle',
  zIndex: 2
}

export const LongEffect: Story<ToastProps> = Template.bind({})
LongEffect.args = {
  children: lorem,
  animation: {
    slideInTime: 1.5,
    visibilityTime: 5,
    slideOutTime: 2
  }
}
