import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-height: 873px;
`

export const MatchesWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.xsmall};
  margin-bottom: ${(props) => props.theme.spacing.xxsmall};
`

export const SectionWrapper = styled.div`
  &:not(:first-child) {
    margin-top: ${(props) => props.theme.spacing.large};
  }
`
