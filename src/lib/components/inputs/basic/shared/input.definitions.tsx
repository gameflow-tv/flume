import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { HTMLInputTypeAttribute, ReactNode } from 'react'

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
  requiredErrorType?: InputValidationType
  onChange?: (e?: any) => void
}

export enum InputValidationType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}

export interface InputValidationData {
  type?: InputValidationType
  icon?: IconDefinition
  message?: string
}
