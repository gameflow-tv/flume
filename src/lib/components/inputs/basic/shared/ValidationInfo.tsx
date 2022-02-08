import React from 'react'
import { InputCriteriaResponse, InputProps } from './types'
import { InfoMessage, ListItem } from './styles'

export const ValidationInfo = ({
  props,
  validationResponse
}: {
  props: InputProps
  validationResponse: any
}) => {
  return (
    <React.Fragment>
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {props.multipleCriteriaInfo && validationResponse ? (
        <ul>
          {(validationResponse as Array<InputCriteriaResponse>).map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className={`${crit.type}`} {...props.inputStyles}>
              {crit.message}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </React.Fragment>
  )
}
