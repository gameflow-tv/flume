import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { HTMLInputTypeAttribute, ReactNode } from 'react'
import { isEmpty } from '../../../../helpers/general'

export type InputType = Extract<
  HTMLInputTypeAttribute,
  'checkbox' | 'email' | 'password' | 'radio' | 'search' | 'text' | 'select'
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
  onChange?: (e?: any) => void
}

export enum InputResponseType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
  NONE = 'none'
}

export type CriteriaType = 'min' | 'max' | 'email' | 'required' | 'regex'

export interface InputValidation {
  invalidMessage?: string
  invalidResponseType?: InputResponseType
  validMessage?: string
  validResponseType?: InputResponseType
  condition: {
    type: CriteriaType
    rule?: number | RegExp
  }
}

export type InputCriteriaResponse = {
  message: string
  type: InputResponseType
  icon: IconDefinition
  isValid: boolean
}

export const criteriaRule = (type: CriteriaType, value: string, rule?: number | RegExp) => {
  switch (type) {
    case 'required':
      return !isEmpty(value)
    case 'min':
      return value.length >= (rule as number)
    case 'max':
      return value.length <= (rule as number)
    case 'email':
      return new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(value)
    case 'regex':
      return (rule as RegExp).test(value)
    default:
      throw new Error('Unknown criteria type')
  }
}
