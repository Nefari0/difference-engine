import styled, { css } from "styled-components";
import { backgroundColors } from "../global.styles";

const dark = css`
    background-color:${backgroundColors.lightDark};
    border: solid 1px ${backgroundColors.paper};
`
const light = css`
    background-color:${backgroundColors.darkLight};
    border: solid 1px #555;
`

const minimized = css`
    height:100px;
    textarea {
        height:60px;
    }
`
export const MemoContainer = styled.section`
    ${({darkmode}) => darkmode ? dark : light}
    height:${({large})=>large ? 240 : 100}px;
    top:${({large}) => large ? 10 : 50}px;
    ${({minimize}) => minimize && minimized}
    width:495px;
    height:260px;
    display:flex;
    flex-direction:row-reverse;
    z-index:11;
    pointer-events: none;
    transition: all 100ms;
    border-radius:5px;
    background:none;
    background-color:rgba(0,0,0,0.7 );
    position:absolute;
    top:250px;

    svg {
        position:absolute;
        left:0px;
        top:0px;
        height:50px;
        width:50px;
    }
    
    textarea {
        background:none;
        color:white;
        position:absolute;
        bottom:0px;
        width:100%;
        height:200px;
        transition: all 100ms;
        font-size:20px;
    }

    button,
    textarea {
        pointer-events: auto;
    }

`