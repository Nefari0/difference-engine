import styled from "styled-components";
// import { backgroundColors } from "../global.styles";
// import { backgroundColors } from "../../global.styles";
import { backgroundColors } from "../../../../../global.styles";
import { errorIndicator } from "../../../../../global.styles";

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

    aside {
        display:flex;
        // justify-content: space-evenly;
        justify-content:center;

        p {
            // margin:0px 20px 30px 20px;
        }
    }

    p {
        font-size:40px;
    }   
`

export const ErrorText = styled.p`
    ${errorIndicator}
`