import styled, { css } from "styled-components";
import { backgroundColors } from "../../global.styles";

const {lightDark,dark } = backgroundColors

const goDark = css`
    opacity:.7;
    background-color:#000;
    transition: all 500ms;
    z-index:1;
`

export const KeymapContainer = styled.div`
    position:absolute;
    transition: all 500ms;
    opacity:0;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    z-index:0;
    // bottom:0px;
    // bottom:50%;
    width:500px;
    // height:500px;
    height:100%;
    // background-color:#fff;
    // background-color:${lightDark};

    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: baseline;

    h1 {
        position:absolute;
        top:0px;
        right:40%;
        opacity:1;
    }

    ${({displayKeymap}) => displayKeymap && goDark}
`