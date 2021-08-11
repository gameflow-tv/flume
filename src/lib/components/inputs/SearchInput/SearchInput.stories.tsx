import { Story } from '@storybook/react'
import React from 'react'
import { SearchInput, SearchInputProps } from './SearchInput'

export default {
  title: 'Components/Inputs/SearchInput',
  component: SearchInput
}

const Template = (args: SearchInputProps) => <SearchInput {...args} />

export const Search: Story<SearchInputProps> = Template.bind({})
