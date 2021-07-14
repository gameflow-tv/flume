import React, { ReactNode } from 'react'
import {
  Description,
  DescriptionWrapper,
  DetailsWrapper,
  MatchState,
  BannerWrapper,
  Rectangle,
  TeamName
} from './TeamBannerSkeleton.styles'

type TeamBannerProps = {
  children: ReactNode
}

export const TeamBannerSkeleton = ({ children }: TeamBannerProps) => {
  return (
    <>
      <BannerWrapper>
        <Rectangle></Rectangle>
        <DetailsWrapper>
          <DescriptionWrapper>
            <TeamName />
            <Description />
          </DescriptionWrapper>
          <MatchState />
        </DetailsWrapper>
      </BannerWrapper>
      {children}
    </>
  )
}
