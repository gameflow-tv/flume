import { Story } from '@storybook/react'
import { Tooltip, TooltipProps } from './Tooltip'

export default {
  title: 'components/Tooltip',
  component: Tooltip
}
// export const TooltipStory: Story = () => <Tooltip />

const Template = (args: TooltipProps) => <Tooltip {...args} />

export const Default: Story<TooltipProps> = Template.bind({})
Default.args = {
  content: 'Storybook text'
}


// Basic.args = {

//  }
