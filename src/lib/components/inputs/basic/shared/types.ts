import { HTMLInputTypeAttribute, ReactNode, ChangeEventHandler } from 'react'
import { IconName } from '../../../icons'
import { isEmpty } from '../../../../helpers/general'
import { SharedProps } from './styles'
import { AutocompleteValues } from './AutocompleteValues'

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
  onValidate?: (isValid: boolean) => void
  inputStyles?: SharedProps
  readOnly?: boolean
  autoComplete?: AutocompleteValues
} & React.HTMLProps<HTMLInputElement>

export type InputResponseType = 'error' | 'warning' | 'success' | 'none'

export type CriteriaType = 'min' | 'max' | 'email' | 'required' | 'regex' | 'condition' | 'function'
export type ValidationFunction = (value: any) => boolean

export interface InputValidation {
  id?: string | number
  invalidMessage?: string
  invalidResponseType?: InputResponseType
  validMessage?: string
  validResponseType?: InputResponseType
  condition: {
    type: CriteriaType
    rule?: number | boolean | RegExp | ValidationFunction
  }
}

export type InputCriteriaResponse = {
  message: string
  type: InputResponseType
  icon?: IconName
  isValid: boolean
  criteriaId?: string | number
}

export const criteriaRule = (
  type: CriteriaType,
  value: any,
  rule?: number | boolean | RegExp | ValidationFunction
) => {
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
    case 'condition':
      return value as boolean
    case 'function':
      return (rule as ValidationFunction)?.(value)
    default:
      throw new Error('Unknown criteria type')
  }
}

export const getResultantValidationResponse = (
  validationResponse: InputCriteriaResponse | InputCriteriaResponse[] | undefined
) => {
  if (!validationResponse) {
    return false
  }

  if (Array.isArray(validationResponse)) {
    const allResp = validationResponse.map((v) => v.isValid)
    return allResp.includes(false) ? false : true
  }

  return validationResponse.isValid
}
