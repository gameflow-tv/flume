import styled from 'styled-components'
import { StyledInput } from '../shared/Shared.styles'

export const SearchInput = styled(StyledInput)`
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`
