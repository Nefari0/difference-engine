import styled, { css } from "styled-components";
import { backgroundColors, basicDark } from "../../../global.styles";
import { basicLight } from "../../../global.styles";

const { dark } = backgroundColors
const width = 400

export const CogContainer = styled.div`
    position:relative;
    top:-205px;
    left:-200px;
    right:400px;
    height:${width}px;
    width:${width}px;
`

export const ReferenceCircle = styled.div`
    position:absolute;
    width: ${({refDiameter}) => (refDiameter)}px;
    height: ${({refDiameter}) => (refDiameter)}px;
    border: solid 1px black;
    border-radius:50%;
    transform: translate(-50%, -50%);
` 

export const TipCircle = styled.div`
    width: ${({tipDiameter}) =>(tipDiameter)}px;
    height: ${({tipDiameter}) =>(tipDiameter)}px;
    position:absolute;
    transform: translate(-50%, -50%);
    border: solid 3px purple;
    border-radius:50%;
`

export const BaseCircle = styled.div`
    width: ${({baseDiameter}) => (((baseDiameter)))}px;
    height: ${({baseDiameter}) => (((baseDiameter)))}px;
    border-radius:50%;
    transform: translate(-50%, -50%);
    position:absolute;
    border:solid 1px yellow;
`

export const ShiftWrapper = styled.div`
    width:${({tipDiameter}) => tipDiameter}px;
    transform: translate(-50%, -50%);

    // height:${({tipDiameter}) => tipDiameter}px;
    height:10px;
    // background-color:blue;
    // opacity:.5;
    // border:solid 10px yellow;
`

export const CogOrigin = styled.div`
    height:1px;
    width:1px;
    position:absolute;
    transform: translate(${width/2}px, ${width/2}px);
    z-index:1000;
`

const titleDarkBackground = css`
    ${basicDark}
    background-color:${dark};
`
export const GearTitle = styled.section`
${({darkmode}) => darkmode ? titleDarkBackground : basicLight}
    position:absolute;
    left:-250px;
    top:-260px;
    width:495px;
    z-index:1000000;
    padding-top:20px;
    height:70px;

    h1 {
        margin:0px;
    }

    a {
        color:${({darkmode}) => darkmode ? 'white' : 'blue'};
    }
`