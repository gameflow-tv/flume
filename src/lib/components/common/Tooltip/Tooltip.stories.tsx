import { Story } from '@storybook/react'
import React from 'react'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'components/common/Tooltip',
  component: Tooltip
}

const Target = () => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        color: 'white',
        padding: '16px',
        borderRadius: '8px'
      }}
    >
      <p>Target</p>
    </div>
  )
}

const Template: Story<TooltipProps> = (props: TooltipProps) => {
  return <Tooltip label={props.label} position={props.position} children={props.children} />
}

export const Bottom = Template.bind({})
Bottom.args = {
  label: 'Tooltip',
  position: 'bottom',
  children: <Target />
}

export const Top = Template.bind({})
Top.args = {
  label: 'Tooltip',
  position: 'top',
  children: <Target />
}

export const Left = Template.bind({})
Left.args = {
  label: 'Tooltip',
  position: 'left',
  children: <Target />
}

export const Right = Template.bind({})
Right.args = {
  label: 'Tooltip',
  position: 'right',
  children: <Target />
}
