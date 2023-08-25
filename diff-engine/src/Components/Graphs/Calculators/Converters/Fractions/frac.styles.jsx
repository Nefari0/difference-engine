import styled from "styled-components";
// import { backgroundColors } from "../global.styles";
// import { backgroundColors } from "../../global.styles";
import { backgroundColors } from "../../../global.styles";

const { paper,dark } = backgroundColors

export const FracDisplay = styled.section`
    position:relative;
    margin:auto;
    font-size:20px;
    bottom:40px;
    width:100%;
    height:100%;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? '#fff':'black'};
    border: solid 1px;
    border-radius:5px;
    z-index:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;

    p {
        font-size:40px;
    }   
`