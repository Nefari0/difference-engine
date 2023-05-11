import styled from "styled-components";

import { backgroundColors } from "../../../global.styles";

const {
    paper,

    // light,
    // midLight,
    // darkLight,

    // lightDark,
    // midDark,
    dark
} = backgroundColors

export const AngleLine = styled.span`
    width:200px;
    border-top:solid 1px;
    position:absolute;
    bottom:0px;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? paper:'black'};
`

export const Degrees = styled.i`
    left:110px;
    top:-10px;
    position:absolute;
    transform: rotate(${({degrees}) => degrees}deg);
`

export const Radiis = styled.div`
    position:absolute;
    height:30px;
    width:30px;
    padding:0px;
    left:160px;
    top:-15px;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    transform: rotate(${({degrees}) => degrees}deg);
`

export const SinCosCoords = styled.div`
    transform: rotate(${({degrees}) => degrees}deg);
    position:absolute;
    left:200px;
    bottom:-15px;
    height:30px;
    width:90px;
    padding:0px;
`