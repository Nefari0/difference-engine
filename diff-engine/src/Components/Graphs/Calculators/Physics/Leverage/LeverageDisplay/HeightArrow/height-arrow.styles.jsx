import styled, { css } from "styled-components";
import { backgroundColors } from "../../../../../global.styles";

const { lightDark,darkLight,dark,paper } = backgroundColors

// const hide = css`
//   display:none;
// `

export const WedgeWrapper = styled.div`
    background-color:${({darkmode}) => darkmode ? dark : paper};
    height:30px;
    width:30px;
    border-radius:50%;
    position:absolute;
    right:-15px;
    top:-15px;
    transform:rotate(-90deg);
`

export const Wedge = styled.div`
    position:absolute;
    transform-origin: 50px 50px;
    top:2px;
    right:4px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid ${({darkmode}) => !darkmode ? darkLight : lightDark};
`