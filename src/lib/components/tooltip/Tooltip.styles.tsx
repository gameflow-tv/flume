import styled from 'styled-components'
import { TooltipProps } from './Tooltip'

export const ToolTip = styled.div<TooltipProps>`
align-items: center;
display: flex;
background-color: #eee;
position: relative;
font-size: 10px;


&::before, &::after {
    position: absolute;
    left: 0;
    bottom: -2.5rem;
    transform: scale(0);
    transition: all .3s ease;
    transform-origin: left left;
    }

&::before {
    content: attr(content);
    height: 30px;
    width: 118px;
    background-color: red;
    max-width: 100%;
    border-radius: 4px;
    text-align: center;
}


&::after {
    width: 15px;
    height: 15px;
    background-color: red;
    clip-path: polygon(50% 0%, 100% 50%, 50% 50%, 0% 50%);
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: .5rem;
    
    /* content: '';
    opacity: 0;
    border: 10px solid transparent;
    border-bottom-color: black;
    transform: translateY(100%);
    position: absolute;
    top: -100%; */
  
}

&:hover::before,
&:hover::after {
    transform: scale(1);
    opacity: 1;
    
}
`

