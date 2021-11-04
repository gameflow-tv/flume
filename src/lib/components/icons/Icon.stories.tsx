import { Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Icon, IconData, IconProps, Icons } from '.'

export default {
  title: 'Components/Icon',
  component: Icon
}

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: 'arrow_left',
  color: '#fff'
}

const Grid = styled.div`
  display: inline-grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  grid-auto-rows: 1rem;
`

export const All = () => {
  return (
    <Grid>
      {Object.keys(IconData).map((key) => (
        <Icon key={key} icon={key} color="white" />
      ))}
    </Grid>
  )
}
