import styled from "styled-components";
import { backgroundColors } from "../../../../global.styles";

const {
    lightDark,
    dark,
    light,
} = backgroundColors

export const DocumentContainer = styled.div`
    position:absolute;
    height:600px;
    width:400px;
    background-color:${({darkmode}) => !darkmode ? light : dark};
    color:${({darkmode}) => darkmode ? light : dark};
    z-index:1000000000000000000000000;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    left:50px;
    padding:10px;
    border-radius:10px;
    
    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
    }

    button {position:absolute;}
`

export const OperatorTable = styled.table`
    width:100%;
    th, td {
    border:1px solid ${({darkmode}) => darkmode ? 'white':'black'}; 
    }

    td:first-of-type {
        text-align:left;
    }

`