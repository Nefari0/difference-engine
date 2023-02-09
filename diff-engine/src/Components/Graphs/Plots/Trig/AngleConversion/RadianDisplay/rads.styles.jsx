import styled from "styled-components";
import { backgroundColors } from "../../../../global.styles";

const {dark,paper} = backgroundColors

export const RadianContainer = styled.div`
    position:absolute;
    width:150px;
    height:100px;
    // background-color:blue;
    // border: solid;
    // color:white;
    // background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? paper:'black'};
`