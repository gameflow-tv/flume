import React from 'react'
import { useTheme } from '../../../../hooks'
import { MatchWrapper, ScoreBox, TeamName } from './MatchSkeleton.styles'

export const MatchSkeleton = () => {
  const theme = useTheme()
  return (
    <MatchWrapper theme={theme}>
      <TeamName theme={theme}></TeamName>
      <ScoreBox theme={theme}></ScoreBox>
      <TeamName theme={theme}></TeamName>
    </MatchWrapper>
  )
}
