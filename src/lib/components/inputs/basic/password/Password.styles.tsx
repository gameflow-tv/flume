import styled from 'styled-components'
import theme from '../../../../theme/theme'

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
