import styled, { css } from "styled-components";
import { backgroundColors } from "../../../../../global.styles";
const { lightDark,darkLight } = backgroundColors

const hide = css`
  display:none;
`
export const Wedge = styled.div`
    position:absolute;
    transform-origin: 50px 50px;
    right:-45px;
    top:-25px;
    width: 0; 
    height: 0; 
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    // border-bottom: 60px solid red; 
    border-bottom: 60px solid ${({darkmode}) => darkmode ? lightDark : darkLight};

    ${({condition}) => condition === true && hide}
`