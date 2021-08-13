import styled from 'styled-components'
import { Theme } from '../../../theme'

export const Wrapper = styled.div`
  display: flex;
  max-height: 873px;
`

export const MatchesWrapper = styled.div<{ theme: Theme }>`
  margin-right: ${(props) => props.theme.spacing.xsmall};
  margin-bottom: ${(props) => props.theme.spacing.xxsmall};
`

export const SectionWrapper = styled.div<{ theme: Theme }>`
  &:not(:first-child) {
    margin-top: ${(props) => props.theme.spacing.large};
  }
`
