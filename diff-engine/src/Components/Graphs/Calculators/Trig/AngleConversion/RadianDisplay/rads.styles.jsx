import styled from "styled-components";
import { backgroundColors } from "../../../../global.styles";

const {dark,paper} = backgroundColors

export const RadianContainer = styled.div`
    position:absolute;
    width:100px;
    height:115px;
    color:${({darkmode}) => darkmode ? paper:'black'};
    // background-color:yellow;
    display:flex;
    flex-direction:column;
`