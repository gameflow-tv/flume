import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext, TypographyStyle } from '../../../theme'
import { Search, Icon, Wrapper } from './SearchInput.styles'

export type SearchInputProps = {
  borderColor: string
  color: string
  shadow: string
  borderRadius: string
  padding: string
  typography: TypographyStyle
  outline: string
  background: string
  iconSize?: string
}

export const SearchInput = (props: SearchInputProps) => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="Search"
        typography={theme.typography.body1}
        borderColor={props.borderColor || theme.colors.shimmerHighlight}
        color={props.color || theme.colors.mediumWhite}
        shadow={props.shadow || theme.shadows.small}
        borderRadius={props.borderRadius || theme.spacing.xxsmall}
        padding={props.padding || theme.spacing.small}
        outline={theme.colors.primary}
        background={props.background || theme.colors.background}
      />
      <Icon size={props.iconSize || '14px'} color={theme.colors.mediumWhite}>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </Wrapper>
  )
}
