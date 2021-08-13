import React from 'react'
import { useTheme } from '../../../../hooks'
import { Box } from './InfoBox.styles'

export const InfoBoxSkeleton = () => {
  const theme = useTheme()
  return <Box theme={theme}></Box>
}
