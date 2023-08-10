import styled, { css } from "styled-components";
import { messageBox } from "../../KeyPad/input.styles";

const ashrink = css`
    margin-bottom:50px;
    transition: all 1s ease-out;
`

const divShrink = css`
    margin-bottom:30px;
    transition: all 1s ease-out;
    min-height:100px;
`

// font-size:${({displayKeymap}) => displayKeymap ? '10px' : '20px'};
export const Blendering = styled.div`
    width:100%;
    height:50px;
    position:relative;
    // background-color:blue;
    transition: all 1s ease-out;
    // justify-content: space-between;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: baseline;
	align-content: stretch;
    a {
        font-size:20px;
        position:relative;
        left:0px;

        cursor:pointer;
        transition: all 1s ease-out;

        color:${({darkmode}) => darkmode ? '#fff' : '#555'};
        ${({displayKeymap}) => displayKeymap && ashrink}
    }
    p {
        ${messageBox}
        position:relative;
        top:-50px;
        margin-bottom:auto;
        transform-origin: top left;
        max-width:50%;
        display:${({displayKeymap}) => !displayKeymap && 'none'};
        font-size:10px;
    }
    
    ${({displayKeymap}) => displayKeymap && divShrink}
`