import styled from "styled-components";
import { backgroundColors } from "../../../global.styles";

const { paper,dark } = backgroundColors
export const widthOfLeverBar = 400; // --- In pixels

export const RelativityContainer = styled.section`
    position:absolute;
    font-size:20px;
    bottom:0px;
    width:100%;
    height:100%;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? '#fff':'black'};
    border: solid 1px;
    border-radius:5px;
    z-index:1;

    display:flex;
    flex-direction:column;
    justify-content:space-around;

    p {
        font-size:20px;
        position:absolute;
    }   
`

export const ValueButtonPad = styled.div`
    position:absolute;
    width:150px;
    height:300px;
    right:100px;
    display:flex;
    flex-direction:column;
    color:${({darkmode}) => darkmode ? '#fff' : 'black'}
`

export const Label = styled.p`
    top:-10px;
    width:100%;
    position:absolute;
`