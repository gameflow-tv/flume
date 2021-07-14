import React from 'react'
import { InfoBoxSkeleton } from '../LoadingComponents/InfoBox/InfoBoxSkeleton';
import { MatchSkeleton } from '../LoadingComponents/MatchSkeleton/MatchSkeleton'
import { TeamBannerSkeleton } from '../LoadingComponents/TeamBannerSkeleton/TeamBannerSkeleton'
import { MatchesWrapper, Wrapper } from './LoadingSkeleton.styles';

export const LoadingSkeleton = () => {
    const banners = [1, 2];
    const matches = [1, 2, 3, 4];

    return (
        <Wrapper>
            <MatchesWrapper>
            {banners.map((banner, index) => {
                return <TeamBannerSkeleton key={index}>
                    {matches.map((match, index) => {
                        return <MatchSkeleton key={index}/>
                    })}
                </TeamBannerSkeleton>
            })}
            </MatchesWrapper>
            <InfoBoxSkeleton/>
        </Wrapper>
    )
}
