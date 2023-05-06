import styled from "styled-components";
import { basicDark,basicLight } from "../global.styles";

export const PercentDisplayContainer = styled.section`
    width:100%;
    height:100%;
    bottom:0px;
    position:absolute;
    margin:auto;
    ${({darkmode}) => darkmode ? basicDark : basicLight}
    z-index:1;
    display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`