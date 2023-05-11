import styled from "styled-components";
import { backgroundColors } from "../../../../global.styles";

const {dark,paper} = backgroundColors

export const RadianContainer = styled.div`
    position:absolute;
    width:150px;
    height:100px;
    color:${({darkmode}) => darkmode ? paper:'black'};
`