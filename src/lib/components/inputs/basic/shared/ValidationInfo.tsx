import React from 'react'
import { InputCriteriaResponse, InputProps } from './types'
import { InfoMessage, ListItem } from './styles'

export const ValidationInfo = ({
  props,
  validationResponse
}: {
  props: InputProps
  validationResponse: InputCriteriaResponse | InputCriteriaResponse[]
}) => {
  return (
    <React.Fragment>
      {!props.multipleCriteriaInfo && (
        <InfoMessage
          className={(validationResponse as InputCriteriaResponse)?.type}
          {...props.inputStyles}
        >
          {(validationResponse as InputCriteriaResponse)?.message}
        </InfoMessage>
      )}
      {props.multipleCriteriaInfo && validationResponse ? (
        <ul>
          {(validationResponse as InputCriteriaResponse[]).map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className={`${crit.type}`} {...props.inputStyles}>
              {crit.message}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </React.Fragment>
  )
}
