import { HTMLInputTypeAttribute, ReactNode, ChangeEventHandler } from 'react'
import { IconName } from '../../../icons'
import { isEmpty } from '../../../../helpers/general'
import { SharedProps } from './styles'

export type InputType = Extract<
  HTMLInputTypeAttribute,
  'checkbox' | 'email' | 'password' | 'radio' | 'search' | 'text'
>

export type AutocompleteValues =
  | 'off'
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo'

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

export type CriteriaType = 'min' | 'max' | 'email' | 'required' | 'regex' | 'condition' | 'custom'

export interface InputValidation {
  invalidMessage?: string
  invalidResponseType?: InputResponseType
  validMessage?: string
  validResponseType?: InputResponseType
  condition: {
    type: CriteriaType
    rule?: number | boolean | RegExp | Function
  }
  nonBlocking?: boolean
}

export type InputCriteriaResponse = {
  message: string
  type: InputResponseType
  icon: IconName | undefined
  isValid: boolean
}

export const criteriaRule = (
  type: CriteriaType,
  value: any,
  rule?: number | boolean | RegExp | Function
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
      return rule as boolean
    case 'custom':
      return (rule as Function)?.(value)
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
