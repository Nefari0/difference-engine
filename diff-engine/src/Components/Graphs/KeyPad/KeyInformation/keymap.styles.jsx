import styled, { css } from "styled-components";
import { backgroundColors } from "../../../../global.styles";

const { transition } = backgroundColors

const baseZIndex = 0

const goDark = css`
    opacity:.4;
    background-color:#000;
    z-index:${baseZIndex+1};
    width:500px;
    height:100%;
    ${transition}
`

export const KeymapContainer = styled.div`
    position:absolute;
    opacity:1;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    z-index:${baseZIndex};
    // height:0px;
    // width:0px;
    border-radius:10px;
    ${transition}

    h1 {
        position:absolute;
        top:0px;
        right:40%;
        opacity:1;
    }

    ${({displayKeymap}) => displayKeymap && goDark}
`

// --- User clicks this element to escape help info screen --- //
export const EscapeSheild = styled.div`
    // background-color:yellow;
    z-index:${baseZIndex+3};
    opacity:1;
    width:500px;
    height:100%;
    position:absolute;
`