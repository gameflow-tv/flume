import { faArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from './ScrollButton.style'

export const ScrollButton = () => {
    return (
        <Button>
            <FontAwesomeIcon icon={faArrowRight}/>
        </Button>
    )
}
