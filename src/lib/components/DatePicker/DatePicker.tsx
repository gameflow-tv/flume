import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from '../../../hooks'
import AspectRatio from '../AspectRatio/AspectRatio'
import { Grid, NavBtn, Wrapper } from './DatePicker.styles'

export type DatePickerProps = {
  width?: string
  navBgColor?: string
  navTxtColor?: string
  navHoverBgColor?: string
  navHoverTxtColor?: string
}

export const DatePicker = ({
  width,
  navBgColor,
  navTxtColor,
  navHoverBgColor,
  navHoverTxtColor
}: DatePickerProps) => {
  const theme = useTheme()

  const styles = {
    width: width || '328px',
    navBgColor: navBgColor || theme.colors.sliderBackground,
    navTxtColor: navTxtColor || theme.colors.secondaryText,
    navHoverBgColor: navHoverBgColor || theme.colors.calendarOnHover,
    navHoverTxtColor: navHoverTxtColor || theme.colors.dateBoxHoverTxtColor
  }

  return (
    <Wrapper {...styles}>
      <Grid>
        <AspectRatio aspectRatio={100}>
          <NavBtn className="prevmtharea" {...styles}>
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </NavBtn>
        </AspectRatio>
        <div className="mthdescarea" {...styles}>
          asdf
        </div>
        <AspectRatio aspectRatio={100}>
          <NavBtn className="nextmtharea" {...styles}>
            <FontAwesomeIcon icon={faLongArrowRight} />
          </NavBtn>
        </AspectRatio>
      </Grid>
    </Wrapper>
  )
}
