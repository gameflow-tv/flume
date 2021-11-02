import { useCallback, useState } from 'react'
import {
  criteriaRule,
  InputProps,
  InputResponseType
} from '../components/inputs/basic/shared/input.definitions'
import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/pro-solid-svg-icons'
import { isEmpty } from 'lodash'

const getValidationIcon = (errorType: InputResponseType) => {
  switch (errorType) {
    case InputResponseType.ERROR:
      return faTimesCircle
    case InputResponseType.WARNING:
      return faExclamationTriangle
    case InputResponseType.SUCCESS:
      return faCheckCircle
    default:
      return undefined
  }
}

const handleResponse = (invalidMessage, validMessage, type, isValid) => {
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

export const useInputValidation = () => {
  const [response, setResponse] = useState(undefined)

  const setValidationResponse = useCallback((value: string, props: InputProps) => {
    if (!props.multipleCriteriaInfo) {
      if (!Array.isArray(props.criteria)) {
        const isValid = criteriaRule(
          props.criteria?.condition.type,
          value,
          props.criteria?.condition?.rule
        )
        const respType = isValid
          ? props.criteria?.validResponseType
          : props.criteria?.invalidResponseType

        setResponse(
          handleResponse(
            props.criteria?.invalidMessage,
            props.criteria?.validMessage,
            respType,
            isValid
          )
        )
      } else {
        for (const key in props.criteria) {
          const crit = props.criteria[key]
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
              handleResponse(
                crit.invalidMessage,
                crit.validMessage,
                crit.validResponseType,
                isValid
              )
            )
          }
        }
      }
    } else {
      let validations = []
      for (const key in props.criteria) {
        const crit = props.criteria[key]
        const isValid = criteriaRule(crit.condition.type, value, crit.condition?.rule)
        const respType = isValid ? crit.validResponseType : crit.invalidResponseType

        validations = [
          ...validations,
          handleResponse(crit.invalidMessage, crit.validMessage, respType, isValid)
        ]
      }

      console.log(validations)

      setResponse(validations)
    }
  }, [])

  return [response, setValidationResponse]
}
