import styled from "styled-components"
import { backgroundColors } from "../../../../global.styles"

const {
    // paper,

    // light,
    // midLight,
    // darkLight,

    // lightDark,
    // midDark,
    // dark
} = backgroundColors

export const TrigFunctionDisplay = styled.ul`
    position:absolute;
    left:-220px;
    top:-260px;
    width:70px;
    list-style-type: none;
    padding:0px;
    text-align:left;
    // color:black;
    color:${({darkmode}) => darkmode ? 'white' : 'black'};
    font-weight:600;
    
    li {
        font-size:10px;
        margin:10px;
    }
`