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

export const ToggleArea = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: #434647; /* Change to prop and use default color */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  & > svg {
    color: #ffffff; /* Change to prop and use default color */
  }
`
