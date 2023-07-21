import styled, { css } from "styled-components";
import { backgroundColors } from "../global.styles";
import { widthParameters } from "../global.styles";
// import { basicDark,basicLight } from "../global.styles";
const { enclosureWidth,enclosurePadding } = widthParameters

const dark = css`
    background-color:${backgroundColors.lightDark};
    border: solid 1px ${backgroundColors.paper};
`
const light = css`
    background-color:${backgroundColors.darkLight};
    border: solid 1px #555;
`

const minimized = css`
    height:25px;
    width:25px;
    border:none;
    background:none;
    top:0px;
    left:100%;
`
// width:${(enclosureWidth)*.5}px;
// padding:${enclosurePadding*.5}px;
export const MemoContainer = styled.section`
    ${({darkmode}) => darkmode ? dark : light}
    height:${({large})=>large ? 240 : 100}px;
    top:${({large}) => large ? 10 : 50}px;
    ${({minimize}) => minimize && minimized}
    z-index:11;
    pointer-events: auto;
    position:sticky;
    transition: all 100ms;
    border-radius:5px;

    textarea {
        position:relative;
        top:30px;
        width:95%;
        height:${({large}) => large ? 200 : 60}px;
        background-color:${backgroundColors.paper};
        transition: all 100ms;
    }
`