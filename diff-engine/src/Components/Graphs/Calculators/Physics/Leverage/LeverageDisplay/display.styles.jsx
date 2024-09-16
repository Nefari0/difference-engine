import styled from "styled-components";
import { backgroundColors,errorIndicator } from "../../../../../../global.styles";

const { paper,dark } = backgroundColors
export const widthOfLeverBar = 400; // --- In pixels

export const LeverageDisplayContainer = styled.section`
    position:absolute;
    font-size:20px;
    bottom:0px;
    width:100%;
    height:100%;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? '#fff':'black'};
    border: solid 1px;
    border-radius:5px;
    z-index:1;

    p {
        font-size:20px;
        position:absolute;
    }   
`

export const LeverBarContainer = styled.div`
    position:absolute;
    width:${widthOfLeverBar}px;
    margin:auto;
    top:350px;
    left:50px;
    height:1px;
    border-top: solid;
    border-color: red;
    text-align:left;
    transform:rotate(${({rotation}) => rotation}deg);
    transition: all 1000ms;
    z-index:1;
`

export const LeverBarText = styled.div`
    top:-30px;
    position:absolute;
    width:400px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    ${({condition}) => condition && errorIndicator}
`

export const Fulcrum = styled.span`
    top:24px;
    border-left:solid;
    transition: all 1000ms;
    position:absolute;
    transform:rotate(${({rotation}) => -rotation}deg);

    span {transform:rotate(${({rotation}) => -rotation}deg);}

    svg {
        position:absolute;
        left:-11px;
        top:-5px;
    }

    button {
        height:50px;
        width:50px;
        top:0px;
        right:-60px;
    }
`

export const FulcrumText = styled.i`
    position:absolute;
    top:0px;
    left:-30px;
    width:200px;
    font-weight:600;
    ${({condition}) => condition && errorIndicator}
`

export const Axis = styled.div`
    position:absolute;
    width:${widthOfLeverBar}px;
    border-bottom:solid;
    border-style: dashed none none none;
    height:1px;
    opacity:.5;
    top:-5px;
    transition: all 1000ms;

    i {
        position:absolute;
        left:0px;
        top:-30px;
    }
`

export const ValDisplay = styled.div`
    top:80px;
    position:absolute;
    width:100px;
    height:100px;
    display:flex;
    justify-content:center;
    align-item:center;
`

export const InputForceValue = styled(ValDisplay)`
    border-radius:50%;
    border:solid;
    left:390px;

    strong {
        margin:auto;
    }
`

export const OutputForceValue = styled(InputForceValue)`
    left:10px;
`

export const Length = styled.i`
    position:absolute;
    ${({condition}) => condition && errorIndicator}
`

export const TotalLength = styled(Length)`    
    font-size:20px;
    position:relative;
`

const dedHeight = 115
export const DistanceExchangeDisplay = styled.div`
    position:absolute;
    bottom:30px;
    right:30px;
    height:${({a_2}) => dedHeight+a_2}px;
    width:300px;
    transition: all 1000ms;
    
    border-style: none dashed dashed none;
    z-index:0;
    text-align:left;

    i {
        position:absolute;
        bottom:-30px;
        margin:0px;
        width:100%;
    }
    
`