import { faSearch } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from '../../../hooks'
import { TypographyStyle } from '../../../theme'
import { Search, Icon, Wrapper } from './SearchInput.styles'

export type SearchInputProps = {
  borderColor?: string
  color?: string
  shadow?: string
  borderRadius?: string
  padding?: string
  typography?: TypographyStyle
  outline?: string
  background?: string
  iconSize?: string
}

export const SearchInput = (props: SearchInputProps) => {
  const theme = useTheme()

  const styles: SearchInputProps = {
    borderColor: props.borderColor || theme.colors.shimmerHighlight,
    color: props.color || theme.colors.inputBackground,
    typography: props.typography || theme.typography.body1,
    shadow: props.shadow || theme.shadows.small,
    borderRadius: props.borderRadius || theme.shapes.borders.small,
    padding: props.padding || theme.spacing.small,
    outline: theme.colors.primary,
    background: props.background || theme.colors.background,
    iconSize: props.iconSize || '14px'
  }

  return (
    <Wrapper>
      <Search type="text" placeholder="Search" {...styles} />
      <Icon size={styles.iconSize} color={theme.colors.inputBackground}>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </Wrapper>
  )
}
