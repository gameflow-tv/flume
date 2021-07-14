import styled from 'styled-components'

export const BannerWrapper = styled.div`
  min-width: 798px;
  max-height: 80px;
  border-radius: 4px;
  background: #36393b;
  box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const Rectangle = styled.div`
  width: 114px;
  height: 64px;
  border-radius: 4px;
  background: #434647;
  margin: 0 10px;
`

export const TeamName = styled.h1`
  width: 182px;
  height: 18px;
  border-radius: 4px;
  background: #434647;
  margin: 0;
`

export const Description = styled.p`
  width: 98px;
  height: 17px;
  border-radius: 4px;
  background: #434647;
  margin: 0;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  height: 100%;
  justify-content: center;
  gap: 8px;
`

export const MatchState = styled.p`
  width: 71px;
  min-height: 16px;
  border-radius: 4px;
  background: #434647;
  margin-right: 12px;
`

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`
