import { ThemeContext } from '@theme'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Input, ListItem, Label } from './TextInput.styles'

export type TextInputCriteria = {
  criteria: string
  fulfilled: boolean
}

export type TextInputProps = {
  placeholder: string
  label?: string
  criteria?: TextInputCriteria[]
  type: 'text' | 'password' | 'select'
}

export const TextInput = (props: TextInputProps) => {
  const theme = useContext(ThemeContext)

return (

<>
  <Label typography={theme.typography.header5}>
    {props.placeholder.slice(0, 1).toUpperCase() + props.placeholder.slice(1).toLowerCase()}
  </Label>
  <br />
  <Input
    typography={theme.typography.body1}
    transition={theme.transitions.long}
    backgroundColor={theme.colors.onBackground}
    type={props.type}
    placeholder={props.placeholder}
  />
  {props.criteria ? (
    <ul>
      {props.criteria.map((crit) => (
        <ListItem
          typography={theme.typography.body3}
          color={crit.fulfilled ? theme.colors.success : theme.colors.primary}>
          {crit.criteria}
        </ListItem>
      ))}
    </ul>
  ) : null}
</>
) }
