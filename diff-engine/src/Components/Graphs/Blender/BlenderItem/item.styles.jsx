import styled, { css } from "styled-components";
import { messageBox } from "../../KeyPad/input.styles";

const ashrink = css`
    // font-size:10px;
    margin-bottom:50px;
    transition: all 1s ease-out;
`

const divShrink = css`
    margin-bottom:30px;
    transition: all 1s ease-out;
    min-height:70px;
`

// font-size:${({displayKeymap}) => displayKeymap ? '10px' : '20px'};
export const Blendering = styled.div`
    width:100%;
    height:50px;
    position:relative;
    // background-color:blue;
    transition: all 1s ease-out;
    display:flex;
    flex-direction:column;
    // justify-content: space-between;
    a {
        font-size:20px;
        position:relative;
        left:0px;
        margin:8px;

        cursor:pointer;
        transition: all 1s ease-out;

        color:${({darkmode}) => darkmode ? '#fff' : '#555'};
        ${({displayKeymap}) => displayKeymap && ashrink}
    }
    p {
        // max-width:200px;
        ${messageBox}
        // position:absolute;
        position:relative;
        // right:100px;
        // top:0px;
        // margin:0px;
        // min-width:100px;
        // min-height:20px;
        // background-color:blue;
        max-width:50%;
        display:${({displayKeymap}) => !displayKeymap && 'none'};
    }
    
    ${({displayKeymap}) => displayKeymap && divShrink}

    `

export const BlenderLink = styled.a`

`

// ${messageBox}
export const ItemInfo = styled.p`
    // position:relative;
    // margin:0px;
    // top:20px;
    // right:0px;
    // position:absolute;
    // background-color:yellow;
`