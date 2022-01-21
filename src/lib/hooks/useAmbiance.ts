import { useContext } from 'react'
import { AmbianceContext, AmbianceProps } from '../providers/AmbianceProvider'

/** Retrieves a Ambiance instance from the current context. Assumes a `AmbianceProvider` is in the context.*/
export const useAmbiance = (): AmbianceProps => {
  return useContext(AmbianceContext)
}
