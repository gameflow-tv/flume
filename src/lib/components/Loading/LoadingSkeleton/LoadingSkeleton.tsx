import React from 'react'
import { useTheme } from '../../../hooks'
import { InfoBoxSkeleton } from '../LoadingComponents/InfoBox/InfoBoxSkeleton'
import { MatchSkeleton } from '../LoadingComponents/MatchSkeleton/MatchSkeleton'
import { TeamBannerSkeleton } from '../LoadingComponents/TeamBannerSkeleton/TeamBannerSkeleton'
import { MatchesWrapper, SectionWrapper, Wrapper } from './LoadingSkeleton.styles'

export const LoadingSkeleton = () => {
  const banners = [1, 2, 3]
  const matches = [1, 2, 3]

  const theme = useTheme()

  return (
    <Wrapper theme={theme}>
      <MatchesWrapper theme={theme}>
        {banners.map((banner, index) => {
          return (
            <SectionWrapper theme={theme}>
              <TeamBannerSkeleton key={index}>
                {matches.map((match, index) => {
                  return <MatchSkeleton key={index} />
                })}
              </TeamBannerSkeleton>
            </SectionWrapper>
          )
        })}
      </MatchesWrapper>
      <InfoBoxSkeleton />
    </Wrapper>
  )
}
