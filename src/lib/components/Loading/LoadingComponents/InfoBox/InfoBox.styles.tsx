import styled from 'styled-components'
import { Theme } from '../../../../theme'

export const Box = styled.div<{ theme: Theme }>`
  width: 799px;
  height: 873px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.onBackground};
  position: relative;
  box-shadow: ${(props) => props.theme.shadows.small};
`
