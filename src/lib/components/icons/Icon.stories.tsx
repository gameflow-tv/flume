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
  color: 'white',
  size: 'medium'
}

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  gap: 36px 20px;
  grid-auto-flow: row;
`
const IconArea = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
`

const Text = styled.p`
  line-height: 0;
  font-size: small;
  font-weight: 300;
`

export const All = () => {
  return (
    <Grid>
      {Object.keys(IconData).map((key) => (
        <IconArea className="roso">
          <Icon key={key} icon={key} size="large" color="white" />
          <Text>{key}</Text>
        </IconArea>
      ))}
    </Grid>
  )
}
