import styled from 'styled-components'
import { transitionToCss, TypographyStyle, typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { SelectProps } from './Select'

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
`

type LabelProps = {
  typography?: TypographyStyle
  for?: string
}

export const Label = styled.label<LabelProps>`
  ${typographyToCss(theme.typography.header5)};
  color: ${theme.colors.primaryText};
`

export const SelectUl = styled.ul<Partial<SelectProps>>`
  ${typographyToCss(theme.typography.body1)};
  color: ${theme.colors.onTextField};
  position: relative;
  width: 100%;
  background-color: ${theme.colors.textField};
  border: 1px solid ${theme.colors.shimmerHighlight};
  box-sizing: border-box;
  border-radius: 4px;
  list-style: none;
  padding: 12px 0 12px 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`

export const SelectArrow = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.textField};
  height: 100%;
  width: 23px;
  border-radius: 0 4px 4px 0;

  & > svg {
    transition: ${transitionToCss(theme.transitions.short)};
    transform: none;
    font-size: 13px;
  }

  &.expanded {
    & > svg {
      transform: rotate(-180deg);
    }
  }
`

export type ItemProps = {
  wrapItems?: boolean
}

export const PlaceholderItem = styled.li<ItemProps>`
  pointer-events: none;
  width: calc(100% - 24px);
  overflow-x: hidden;
  white-space: ${(props) => (props.wrapItems ? 'normal' : 'nowrap')};
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`

export type SelectGroupProps = {
  isExpanded: boolean
}

export const SelectGroup = styled.ul<SelectGroupProps>`
  ${typographyToCss(theme.typography.body1)};
  display: ${(props) => (props.isExpanded ? 'block' : 'none')};
  background-color: ${theme.colors.textField};
  list-style: none;
  padding: 3px 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary} transparent;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;

    &:horizontal {
      height: 5px;
    }
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.colors.primary};
  }

  &::-webkit-scrollbar-button {
    width: 5px;
    height: 5px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-radius: 10px;
    height: 5px;
    background: ${theme.colors.primary};
  }
`

export const Item = styled.li<ItemProps>`
  display: block;
  cursor: pointer;
  white-space: ${(props) => (props.wrapItems ? 'normal' : 'nowrap')};
  &:hover {
    background-color: ${theme.colors.inactiveStep};
  }
`

export const ItemContent = styled.div`
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  align-items: center;
  pointer-events: none;

  & > .itemCheck {
    margin-right: 16px;
  }
`

export const IconWrapper = styled.div<ItemProps>`
  margin-right: 18px;
  & > svg {
    color: ${theme.colors.calendarDisabledText};
    width: 16px;
    height: 16px;
  }
`
