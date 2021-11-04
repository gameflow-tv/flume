import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { StyledInput, VerificationIcon } from '../shared/Shared.styles'

export const SearchInput = styled(StyledInput)`
  border-radius: 4px;
  padding-right: 80px;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &:focus {
    border: 1px solid ${theme.colors.primary};
    outline: none;

    & + span {
      border-top: 1px solid ${theme.colors.primary};
      border-right: 1px solid ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
    }
  }

  &.error {
    border: 1px solid ${theme.colors.error};
  }
  &.warning {
    border: 1px solid ${theme.colors.warning};
  }
  &.success {
    border: 1px solid ${theme.colors.success};
  }

  &.error:focus {
    border: 1px solid ${theme.colors.error};

    & + span + span {
      border-top: 1px solid ${theme.colors.error};
      border-right: 1px solid ${theme.colors.error};
      border-bottom: 1px solid ${theme.colors.error};
    }
  }

  &.warning:focus {
    border: 1px solid ${theme.colors.warning};

    & + span + span {
      border-top: 1px solid ${theme.colors.warning};
      border-right: 1px solid ${theme.colors.warning};
      border-bottom: 1px solid ${theme.colors.warning};
    }
  }

  &.success:focus {
    border: 1px solid ${theme.colors.success};

    & + span + span {
      border-top: 1px solid ${theme.colors.success};
      border-right: 1px solid ${theme.colors.success};
      border-bottom: 1px solid ${theme.colors.success};
    }
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

  & > svg {
    color: #ffffff; /* Change to prop and use default color */
  }
`
export const VerificationWithToggle = styled(VerificationIcon)`
  right: 41px;

  &.error {
    & > svg {
      color: ${theme.colors.error};
    }
  }
  &.warning {
    & > svg {
      color: ${theme.colors.warning};
    }
  }
  &.success {
    & > svg {
      color: ${theme.colors.success};
    }
  }
`
