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

    p {
        font-size:20px;
        position:absolute;
    }   
`