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

export const useInputValidation = () => {
  const [response, setResponse] = useState(undefined)

  const setValidationResponse = useCallback((value: string, props: InputProps) => {
    if (!props.multipleCriteriaInfo) {
      if (!Array.isArray(props.criteria)) {
        const isValid = criteriaRule(props.criteria?.condition.type, value)
        const respType = isValid
          ? props.criteria?.validResponseType
          : props.criteria?.invalidResponseType

        setResponse({
          message: isValid ? props.criteria?.validMessage : props.criteria?.invalidMessage,
          type: respType,
          icon: getValidationIcon(respType),
          isValid
        })
      } else {
        for (const key in props.criteria) {
          const crit = props.criteria[key]
          const isValid = criteriaRule(crit.condition.type, value)

          if (!isValid) {
            setResponse({
              message: crit.invalidMessage,
              type: crit.invalidResponseType,
              icon: getValidationIcon(crit.invalidResponseType),
              isValid
            })
            break
          } else {
            setResponse({
              message: crit.validMessage,
              type: crit.validResponseType,
              icon: getValidationIcon(crit.validResponseType),
              isValid
            })
          }
        }
      }
    } else {
      let validations = []
      for (const key in props.criteria) {
        const crit = props.criteria[key]
        const isValid = criteriaRule(crit.condition.type, value)
        const respType = isValid ? crit.validResponseType : crit.invalidResponseType

        validations = [
          ...validations,
          {
            message: isValid ? crit.validMessage : crit.invalidMessage,
            type: respType,
            icon: getValidationIcon(respType),
            isValid
          }
        ]
      }

      setResponse(validations)
    }
  }, [])

  return [response, setValidationResponse]
}
