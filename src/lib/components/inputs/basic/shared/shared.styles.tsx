import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { InputProps } from '../Input'

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type
}))<InputProps>`
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
  width: 100%;
  height: 41px;
  background-color: #36393b;
  border-radius: 4px;
  padding: 12px;
  color: rgba(255, 255, 255, 0.5);
  ${theme.typography.body1};
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
`
export const InputGroup = styled.div<InputProps>`
  position: relative;
`
