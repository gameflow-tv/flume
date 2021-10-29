import { useCallback, useEffect, useState } from 'react'
import {
  InputProps,
  InputValidationData,
  InputValidationType
} from '../components/inputs/basic/shared/input.definitions'
import { isEmpty } from '../helpers/general'

import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/pro-solid-svg-icons'
import { PasswordProps } from '../components/inputs/basic/password/Password'

const getValidationIcon = (errorType: InputValidationType) => {
  switch (errorType) {
    case InputValidationType.ERROR:
      return faTimesCircle
    case InputValidationType.WARNING:
      return faExclamationTriangle
    case InputValidationType.SUCCESS:
      return faCheckCircle
    default:
      return undefined
  }
}

export const useInputValidation = () => {
  const [response, setResponse] = useState(undefined)

  const setValidationResponse = useCallback((value: string, props: InputProps) => {
    const errorType = props.requiredErrorType || InputValidationType.ERROR
    if (props.required && isEmpty(value)) {
      setResponse({
        message: 'Please fill in this field',
        type: errorType,
        icon: getValidationIcon(errorType)
      })
    } else {
      setResponse(undefined)
    }
  }, [])

  return [response, setValidationResponse]
}
