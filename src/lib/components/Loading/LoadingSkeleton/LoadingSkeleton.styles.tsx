import styled from 'styled-components'
import theme from '../../../theme/theme'

export const Wrapper = styled.div`
  display: flex;
  max-height: 873px;
`

export const MatchesWrapper = styled.div`
  margin-right: ${theme.spacing.xsmall};
  margin-bottom: ${theme.spacing.xxsmall};
`

export const SectionWrapper = styled.div`
  &:not(:first-child) {
    margin-top: ${theme.spacing.large};
  }
`
