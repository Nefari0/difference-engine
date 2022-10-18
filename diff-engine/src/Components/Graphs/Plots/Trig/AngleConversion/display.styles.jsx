import styled, { css } from "styled-components";

export const TheCircle = styled.div`
    position:absolute;
    width:400px;
    height:400px;
    border: solid 1px #555;
    border-radius:50%;
    left:-202px;
    top:-216px;
    transform: rotate(${({theta}) => -theta}deg);
    transition: all 1000ms;
`

export const ThetaOrigin = styled.div`
    width:10px;
    height:10px;
    position:absolute;
`
    
export const Theta = styled.span`
    position:absolute;
    top:200px;
    width:200px;
    height:4px;
    background-color:black;
`

export const ValueDisplay = styled.div`
    position:absolute;
    height:50px;
    width:40px;
    padding-left:10px;
    background-color:rgb(240, 240, 240);
    display:flex;
    z-index:2;

    i {
        font-size:10px;
    }
`

export const SinPart = styled.span`
    position:absolute;
    height:${({radians}) => Math.abs(200*Math.sin(radians))}px;
    width:4px;
    background-color:red;
    left:0px;
    bottom:24px;
    z-index:0;
    opacity:.5;
    transition: all 1000ms;
`


export const CosPart = styled.span`
    position:absolute;
    width:${({radians}) => Math.abs(200*Math.cos(radians))}px;
    height:4px;
    background-color:blue;
    left:0px;
    bottom:24px;
    z-index:0;
    opacity:.5;
    transition: all 1000ms;
`