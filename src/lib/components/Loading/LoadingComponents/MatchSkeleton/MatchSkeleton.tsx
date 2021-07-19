import React from 'react'
import { MatchWrapper, ScoreBox, TeamName } from './MatchSkeleton.styles'

export const MatchSkeleton = () => {
  return (
    <MatchWrapper>
      <TeamName></TeamName>
      <ScoreBox></ScoreBox>
      <TeamName></TeamName>
    </MatchWrapper>
  )
}
