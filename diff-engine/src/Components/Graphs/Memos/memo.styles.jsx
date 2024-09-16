import styled, { css } from "styled-components";
import { backgroundColors,viewPortSize } from "../../../global.styles";

const dark = css`
    background-color:${backgroundColors.lightDark};
    border: solid 1px ${backgroundColors.paper};
`
const light = css`
    background-color:${backgroundColors.darkLight};
    border: solid 1px #555;
`

export const MemoContainer = styled.section`
    ${({darkmode}) => darkmode ? dark : light}
    width:${viewPortSize}px;
    height:${viewPortSize}px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    z-index:11;
    pointer-events: none;
    transition: all 100ms;
    border-radius:5px;
    background:none;
    background-color:rgba(0,0,0,0.7 );
    position:absolute;

    svg {
        position:absolute;
        left:0px;
        top:0px;
        height:50px;
        width:50px;
    }
    
    textarea {
        width:95%;
        height:85%;
        background:none;
        color:white;
        transition: all 100ms;
        font-size:20px;
        margin:auto;
    }

    button,
    textarea {
        pointer-events: auto;
    }

    button {
        float:right;
        color:#fff;
    }

`