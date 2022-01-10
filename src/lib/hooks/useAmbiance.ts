import { useContext } from 'react'
import { AmbientColorContext } from '../providers/AmbianceProvider'

/** Retrieves a Ambiance instance from the current context. Assumes a `AmbianceProvider` is in the context.*/
export const useAmbiance = (ignoreElevation?: boolean) => {
  const context = useContext(AmbientColorContext)

  if (!ignoreElevation) {
    context.setElevation(context.elevation + 1)
  }

  return context
}
