import React, { ChangeEventHandler, useState } from 'react'
import { useTheme } from '../../../hooks'
import { Input, Label, ListItem, Wrapper } from './TextInput.styles'

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
  onChange?: ChangeEventHandler<HTMLInputElement>
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
  const theme = useTheme()
  const [inputValue, setInternalInputValue] = useState('')

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e)
    }
    setInternalInputValue(e.target.value)
  }

  return (
    <Wrapper gap={theme.spacing.xsmall}>
      <Label
        typography={theme.typography.header5}
        htmlFor={`${props.type}-${props.placeholder}`}
        color={theme.colors.secondaryText}
      >
        {props.placeholder.slice(0, 1).toUpperCase() + props.placeholder.slice(1).toLowerCase()}
      </Label>

      <Input
        id={`${props.type}-${props.placeholder}`}
        typography={theme.typography.body1}
        transition={theme.transitions.short}
        backgroundColor={theme.colors.textField}
        foregroundColor={theme.colors.onTextField}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => setInputValue(e)}
        borderRadius={theme.shapes.borders.small}
        shadow={theme.shadows.xsmall}
        glow={theme.shadows.glow}
        padding={theme.spacing.small}
        outline={theme.colors.primary}
      />
      {props.criteria ? (
        <ul>
          {props.criteria.map(
            (crit) =>
              crit.condition && (
                <ListItem
                  key={`${crit.criteria}`}
                  typography={theme.typography.body3}
                  color={
                    criteriaRule(crit.condition.type, crit.condition.rule, inputValue)
                      ? theme.colors.success
                      : theme.colors.primary
                  }
                >
                  {crit.criteria}
                </ListItem>
              )
          )}
        </ul>
      ) : null}
    </Wrapper>
  )
}
