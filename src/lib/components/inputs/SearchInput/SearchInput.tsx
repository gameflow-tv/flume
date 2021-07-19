import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../theme'
import { Search, Icon, Wrapper } from './SearchInput.styles'
import { SearchInputProps } from './SearchInput.styles'

export const SearchInput = (props: SearchInputProps) => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="Search"
        typography={theme.typography.body1}
        borderColor={theme.colors.shimmerHighlight}
        color={theme.colors.mediumWhite}
        shadow={theme.shadows.small}
        borderRadius={theme.spacing.xxsmall}
        padding={theme.spacing.small}
        outline={theme.colors.primary}
      />
      <Icon size={'14px'} color={theme.colors.mediumWhite}>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </Wrapper>
  )
}
