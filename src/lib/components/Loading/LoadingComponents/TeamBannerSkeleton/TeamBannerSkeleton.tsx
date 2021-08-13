import React, { ReactNode } from 'react'
import { useTheme } from '../../../../hooks'
import {
  Description,
  DescriptionWrapper,
  DetailsWrapper,
  MatchState,
  BannerWrapper,
  Rectangle,
  TeamName
} from './TeamBannerSkeleton.styles'

export type TeamBannerProps = {
  children: ReactNode
}

export const TeamBannerSkeleton = ({ children }: TeamBannerProps) => {
  const theme = useTheme()
  return (
    <>
      <BannerWrapper theme={theme}>
        <Rectangle theme={theme}></Rectangle>
        <DetailsWrapper theme={theme}>
          <DescriptionWrapper theme={theme}>
            <TeamName theme={theme} />
            <Description theme={theme} />
          </DescriptionWrapper>
          <MatchState theme={theme} />
        </DetailsWrapper>
      </BannerWrapper>
      {children}
    </>
  )
}
