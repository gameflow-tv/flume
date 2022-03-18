import { useContext } from 'react'
import { AmbianceContext, AmbianceProps } from '../contexts/Ambiance'

/** Retrieves a Ambiance instance from the current context. Assumes a `AmbianceProvider` is in the context.*/
export const useAmbiance = (): AmbianceProps => {
  const ambiance = useContext(AmbianceContext)

  if (!ambiance) {
    throw new Error('useAmbiance must be used within an Ambiance context')
  }

  return ambiance
}
