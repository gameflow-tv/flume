import { ThemeContext } from '../../../theme'
import React, { useContext, useState } from 'react'
import { Input, Label, ListItem } from './TextInput.styles'

export type CriteriaRules = {
  type: 'length' | 'regex'
  rule: number | RegExp
}

export type TextInputCriteria = {
  criteria?: string
  fulfilled?: boolean
  condition?: CriteriaRules
}

export type TextInputProps = {
  placeholder: string
  label?: string
  criteria?: TextInputCriteria[]
  type: 'text' | 'password' | 'select'
}

const criteriaRule = (type: 'length' | 'regex', rule: number | RegExp, input: string) => {
  if (type === 'length') {
    if (input.length >= (rule as number)) return true
    else return false
  } else if (type === 'regex') {
    const regex = rule as RegExp
    return regex.test(input)
  } else return false
}

export const TextInput = (props: TextInputProps) => {
  const theme = useContext(ThemeContext)
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <Label typography={theme.typography.header5} htmlFor={`${props.type}-${props.placeholder}`}>
        {props.placeholder.slice(0, 1).toUpperCase() + props.placeholder.slice(1).toLowerCase()}
      </Label>
      <br />
      <br />
      <Input
        id={`${props.type}-${props.placeholder}`}
        typography={theme.typography.body1}
        transition={theme.transitions.long}
        backgroundColor={theme.colors.onBackground}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {props.criteria ? (
        <ul>
          {props.criteria.map((crit) => (
            <ListItem
              key={`${crit.criteria}`}
              typography={theme.typography.body3}
              color={
                criteriaRule(crit.condition.type, crit.condition.rule, inputValue)
                  ? theme.colors.success
                  : theme.colors.primary
              }>
              {crit.criteria}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </>
  )
}
