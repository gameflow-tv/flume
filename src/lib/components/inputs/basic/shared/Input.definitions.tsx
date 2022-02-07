import { HTMLInputTypeAttribute, ReactNode, ChangeEventHandler } from 'react'
import { IconName } from '../../../icons'
import { isEmpty } from '../../../../helpers/general'
import { SharedProps } from './Shared.styles'

export type InputType = Extract<
  HTMLInputTypeAttribute,
  'checkbox' | 'email' | 'password' | 'radio' | 'search' | 'text'
>

export type InputProps = {
  type: InputType
  name?: string
  required?: boolean
  value?: string
  placeholder?: string
  label?: ReactNode
  cursor?: string
  disabled?: boolean
  multipleCriteriaInfo?: boolean
  criteria?: InputValidation | InputValidation[]
  onChange?: ChangeEventHandler<HTMLInputElement>
  inputStyles?: SharedProps
  readOnly?: boolean
}

export enum InputResponseType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
  NONE = 'none'
}

export type CriteriaType = 'min' | 'max' | 'email' | 'required' | 'regex' | 'custom'

export interface InputValidation {
  invalidMessage?: string
  invalidResponseType?: InputResponseType
  validMessage?: string
  validResponseType?: InputResponseType
  condition: {
    type: CriteriaType
    rule?: number | RegExp | Function
  }
}

export type InputCriteriaResponse = {
  message: string
  type: InputResponseType
  icon: IconName
  isValid: boolean
}

export const criteriaRule = (type: CriteriaType, value: any, rule?: number | RegExp | Function) => {
  switch (type) {
    case 'required':
      return !isEmpty(value as string)
    case 'min':
      return (value as string).length >= (rule as number)
    case 'max':
      return (value as string).length <= (rule as number)
    case 'email':
      return new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(value as string)
    case 'regex':
      return (rule as RegExp).test(value as string)
    case 'custom':
      return (rule as Function)?.(value)
    default:
      throw new Error('Unknown criteria type')
  }
}
