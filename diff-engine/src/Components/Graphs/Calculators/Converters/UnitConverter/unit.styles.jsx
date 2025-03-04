import styled from "styled-components";

import { backgroundColors } from "../../../../../global.styles";

const { dark,light,paper } = backgroundColors

export const UnitsDisplayContainer = styled.section`
    position:absolute;
    min-height:400px;
    bottom:10px;
    left:0px;
    width:500px;
    // background-color:#fff;
    background-color:${({darkmode}) => darkmode ? dark:'#fff'};
    color:${({darkmode}) => !darkmode ? '#555':'#fff'};
    z-index:1;
    border-radius:10px;
    
    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
        font-size:30px;
    }

    h4 {
        max-width:70%;
        font-size:20px;
        margin:auto;
        overflow:hidden;
    }

    button {position:absolute;}
`
    
export const UnitsDisplay = styled.table`

    position:relative;
    margin:0px;
    min-height:100px;
    width:100%;
    padding:5px;
    border-radius:10px;

    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
    }

    th, td {
        // border:1px solid black;
        border:1px solid ${({darkmode}) => darkmode ? 'white' : 'black'};
        
    }

    td:first-of-type {
        width:50%;
        overflow:hidden;
        padding-left:10px;
    }
`