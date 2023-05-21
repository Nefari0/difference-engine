import styled from "styled-components";
// import { backgroundColors } from "../global.styles";
import { backgroundColors } from "../../global.styles";

const { paper,dark } = backgroundColors

export const FracDisplay = styled.section`
    position:absolute;
    font-size:20px;
    bottom:40px;
    width:80%;
    height:40%;
    // background-color:#fff;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? '#fff':'black'};
    border: solid 1px;
    border-radius:5px;
    z-index:1;

    p {
        font-size:40px;
    }   
`