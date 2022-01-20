import React from 'react'
import { AmbianceContext } from '../../../providers'
import { IconButton } from '../../buttons/IconButton'

export type ScrollButtonProps = {
  boxShadowSmall: string
  boxShadowXSmall: string
  borderRadius: string
  color: string
}

export const ScrollButton = () => {
  return (
    <AmbianceContext.Consumer>
      {(ambiance) => (
        <IconButton icon="arrow_right" size="xlarge" backgroundColor={ambiance.color} />
      )}
    </AmbianceContext.Consumer>
  )
}
