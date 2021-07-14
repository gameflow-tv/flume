import styled from 'styled-components'

export const Button = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 4px;
    background: linear-gradient(180deg, #525556 0%, #434647 100%);
    border: unset;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    filter: brightness(80%);
    transition: all .3s ease;

    &:hover {
        filter: brightness(100%);
        background: linear-gradient(180deg, #666A6B 0%, #575B5C 100%);
    }

    &:focus {
        filter: brightness(100%);
        box-shadow: 0px 0px 1px 2px rgba(255,255,255,1);
        
    }

    &:active {
        background: linear-gradient(180deg, #3A3C3D 0%, #2B2D2E 100%);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        background: #434647;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.5);

    }
   
`