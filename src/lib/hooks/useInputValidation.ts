import { useCallback, useState } from 'react'
import {
  criteriaRule,
  InputProps,
  InputResponseType,
  InputValidation
} from '../components/inputs/basic/shared'

import { isEmpty } from 'lodash'

const getValidationIcon = (errorType: InputResponseType) => {
  switch (errorType) {
    case 'error':
      return 'close_filled'
    case 'warning':
      return 'warning_filled'
    case 'success':
      return 'check_filled'
    default:
      return undefined
  }
}

const handleResponse = (
  invalidMessage: string,
  validMessage: string,
  type: InputResponseType,
  isValid: boolean
) => {
  let message = invalidMessage

  if (isValid && !isEmpty(validMessage)) {
    message = validMessage
  }
  const icon = getValidationIcon(type)

  return {
    message,
    type: type,
    icon,
    isValid
  }
}

const getCriteriaSet = (props: InputProps) => {
  let criteriaSet: InputValidation[] = []

  // Initializing criteriaSet
  if (props.criteria) {
    if (Array.isArray(props.criteria)) {
      criteriaSet = [...props.criteria]
    } else {
      criteriaSet = [props.criteria]
    }
  }

  // Updating criteriaSet by props
  if (props.type === 'email') {
    const emailIdx = criteriaSet.findIndex((crit) => crit.condition?.type === 'email')
    if (emailIdx < 0) {
      criteriaSet = [
        {
          invalidMessage: 'Please fill with a valid e-mail address',
          invalidResponseType: 'warning',
          validResponseType: 'success',
          condition: { type: 'email' }
        },
        ...criteriaSet
      ]
    }
  }

  if (props.required) {
    const requiredIdx = criteriaSet.findIndex((crit) => crit.condition?.type === 'required')
    if (requiredIdx < 0) {
      criteriaSet = [
        {
          invalidMessage: 'Please fill in this field',
          invalidResponseType: 'error',
          validResponseType: 'success',
          condition: { type: 'required' }
        },
        ...criteriaSet
      ]
    }
  }

  return criteriaSet
}

export const useInputValidation = (props: InputProps) => {
  const [response, setResponse] = useState(undefined)
  const criteriaSet = getCriteriaSet(props)

  const setValidationResponse = useCallback((value: string) => {
    if (!props.multipleCriteriaInfo) {
      for (const key in criteriaSet) {
        const crit = criteriaSet[key]
        const isValid = criteriaRule(crit.condition.type, value, crit.condition?.rule)

        if (!isValid) {
          setResponse(
            handleResponse(
              crit.invalidMessage,
              crit.validMessage,
              crit.invalidResponseType,
              isValid
            )
          )
          break
        } else {
          setResponse(
            handleResponse(crit.invalidMessage, crit.validMessage, crit.validResponseType, isValid)
          )
        }
      }
    } else {
      let validations = []
      for (const key in criteriaSet) {
        const crit = criteriaSet[key]
        const isValid = criteriaRule(crit.condition.type, value, crit.condition?.rule)
        const respType = isValid ? crit.validResponseType : crit.invalidResponseType

        validations = [
          ...validations,
          handleResponse(crit.invalidMessage, crit.validMessage, respType, isValid)
        ]
      }

      setResponse(validations)
    }
  }, [])

  return [response, setValidationResponse]
}
