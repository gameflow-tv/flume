import React from 'react'
import styled from 'styled-components'

export type RangeProps = {
    trackColor: string
    thumbColor: string,
    transition: string
}

export type RangeDefinitions = {
    id: string
    type:string
}

export type PDefinitions = {
    id: string
    type:string
}

export const Pats = styled.p<PDefinitions>`
    color: white;
    size: 20px;
`;

export const Range = styled.input.attrs({
    type: 'range',
  })<RangeProps>`
    appearance: none;
	width: 100%;
	height: 5px;
    border-radius: 15px;
    background: ${props => props.trackColor};
    transition: ${(props) => props.transition};

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 17px;
        width: 17px;
        background: ${props => props.thumbColor};
        border-radius: 50%;
    }
  `

