import styled from "styled-components";
// import { widthParameters } from "../global.styles";

export const MemoOverlay = styled.section`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    position:fixed;
    // background-color:yellow;
    z-index:1;
    pointer-events: none;
`

// width:${widthParameters.enclosureWidth}px;
export const MemoContainer = styled.section`
    width:250px;
    height:${({large})=>large ? 200 : 50}px;
    top:${({large}) => large ? 0 : 100}px;
    background-color:blue;
    z-index:11;
    // opacity:.5;
    pointer-events: auto;
    position:absolute;
    transition: all 1000ms;

    textarea {
        position:relative;
        top:30px;
        width:100%;
        height:100%;
    }
`