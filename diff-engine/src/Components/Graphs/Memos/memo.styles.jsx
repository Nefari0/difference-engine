import styled, { css } from "styled-components";
import { backgroundColors } from "../global.styles";
import { widthParameters } from "../global.styles";
// import { basicDark,basicLight } from "../global.styles";
const { enclosureWidth,enclosurePadding } = widthParameters
export const MemoOverlay = styled.section`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    position:fixed;
    z-index:1;
    pointer-events: none;
`

// width:${widthParameters.enclosureWidth}px;
// ${({darkmode}) => darkmode ? basicDark : basicLight}
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
    width:${(enclosureWidth)*.5}px;
    padding:${enclosurePadding*.5}px;
    height:${({large})=>large ? 240 : 100}px;
    top:${({large}) => large ? 10 : 50}px;
    z-index:11;
    pointer-events: auto;
    position:fixed;
    transition: all 1000ms;
    border-radius:5px;

    textarea {
        position:relative;
        top:30px;
        width:95%;
        height:${({large}) => large ? 200 : 60}px;
        background-color:${backgroundColors.paper};
        transition: all 1000ms;
    }
`