import styled from "styled-components";
import { basicDark,basicLight,backgroundColors } from "../global.styles";

export const PercentDisplayContainer = styled.section`
    width:100%;
    min-height:100px;
    bottom:0px;
    position:absolute;
    margin:auto;
    ${({darkmode}) => darkmode ? basicDark : basicLight}
    z-index:1;
    display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`

export const PercentDisplayTable = styled.table`
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
        // border:10px solid yellow;
        border:1px solid ${({darkmode}) => darkmode ? 'white' : 'black'};
    }

    td:first-of-type {
        width:50%;
        overflow:hidden;
        padding-left:10px;
    }
`

export const GuideText = styled.strong`
    color:#fff;
    position:absolute;
    right:90px;
    font-size:12px;
`