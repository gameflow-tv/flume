import { useCallback, useState } from 'react'
import { isEmpty } from '../helpers/general'
import {
  InputProps,
  InputValidationType
} from '../components/inputs/basic/shared/input.definitions'
import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/pro-solid-svg-icons'

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

const emailIsValid = (value: string) => {
  const rule: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return rule.test(value)
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
      if (props.type === 'email') {
        if (!emailIsValid(value)) {
          setResponse({
            message: 'Please fill with a valid e-mail address',
            type: errorType,
            icon: getValidationIcon(errorType)
          })
        }
      }
    }
  }, [])

  return [response, setValidationResponse]
}
