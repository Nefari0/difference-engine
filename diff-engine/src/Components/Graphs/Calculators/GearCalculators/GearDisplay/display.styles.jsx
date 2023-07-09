import styled from "styled-components";
import { backgroundColors } from "../../../global.styles";

const { midLight } = backgroundColors
const width = 400

export const CogContainer = styled.div`
    position:relative;
    top:-205px;
    left:-200px;
    right:400px;
    height:${width}px;
    width:${width}px;

    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
    }

    a {
        color: ${({darkmode}) => darkmode ? midLight : 'blue'};
    }
`

export const ReferenceCircle = styled.div`
    position:absolute;
    width: ${({refDiameter}) => (refDiameter)}px;
    height: ${({refDiameter}) => (refDiameter)}px;
    // border: solid 1px black;
    border-radius:50%;
    transform: translate(-50%, -50%);
` 

export const TipCircle = styled.div`
    width: ${({tipDiameter}) =>(tipDiameter)}px;
    height: ${({tipDiameter}) =>(tipDiameter)}px;
    position:absolute;
    transform: translate(-50%, -50%);
    border: solid 2px purple;
    border-radius:50%;
`

export const BaseCircle = styled.div`
    width: ${({baseDiameter}) => (((baseDiameter)))}px;
    height: ${({baseDiameter}) => (((baseDiameter)))}px;
    border-radius:50%;
    transform: translate(-50%, -50%);
    position:absolute;
    // border:solid 1px yellow;
`

export const ShiftWrapper = styled.div`
    width:${({tipDiameter}) => tipDiameter}px;
    background-color:blue;
    transform: translate(-50%, -50%);
`

export const CogOrigin = styled.div`
    height:1px;
    width:1px;
    position:absolute;
    transform: translate(${width/2}px, ${width/2}px);
    z-index:1000;
`