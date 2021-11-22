import React from 'react'
import { InputCriteriaResponse, InputProps } from './Input.definitions'
import { InfoMessage, ListItem } from './Shared.styles'

export const ValidationInfo = (props: InputProps, validationResponse) => {
  return (
    <>
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
    </>
  )
}
