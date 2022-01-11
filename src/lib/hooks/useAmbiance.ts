import { useContext } from 'react'
import { AmbianceContext } from '../providers/AmbianceProvider'

/** Retrieves a Ambiance instance from the current context. Assumes a `AmbianceProvider` is in the context.*/
export const useAmbiance = () => {
  return useContext(AmbianceContext)
}
