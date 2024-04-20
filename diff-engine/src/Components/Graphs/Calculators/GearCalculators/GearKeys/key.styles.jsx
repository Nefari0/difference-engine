import styled from "styled-components";
import { backgroundColors } from "../../../../../global.styles";

const { lightDark,darkLight,dark } = backgroundColors

export const ButtonPanelContainer = styled.div`
    position:absolute;
    top:-200px;
    right:10px;
    width:120px;
    height:180px;
    // background-color:blue;
    background-color:${({darkmode}) => !darkmode ? darkLight : dark};
    border: solid 2px ${({darkmode}) => darkmode ? '#fff' : '#555'};
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;

    span {
        border-top: 2px solid ${({darkmode}) => !darkmode ? darkLight : lightDark};
    }
`

export const Pointer = styled.span`
    position:absolute;
    width:150px;
    height:2px;
    left:-100px;
    top:0px;
    transform-origin: 95% -60px;
    transform:rotate(30deg);
`

export const ArrowTip = styled.span`
    position:absolute;
    transform-origin: 50px 50px;
    top:-90px;
    // right:4px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid ${({darkmode}) => !darkmode ? darkLight : lightDark};
    left:-4px;
    transform:rotate(-90deg);
`
