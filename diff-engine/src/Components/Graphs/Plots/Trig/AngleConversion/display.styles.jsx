import styled, { css } from "styled-components";
import { backgroundColors } from "../../../global.styles";

const {
    paper,

    light,
    midLight,
    darkLight,

    lightDark,
    midDark,
    dark
} = backgroundColors

export const OuterRotation = styled.div`
    position:absolute;
    width:400px;
    height:400px;
    left:-202px;
    top:-226px;
    transform: rotate(${({theta}) => -theta}deg);
    transition: all 1000ms;

`

export const ThetaOrigin = styled.div`
    width:1px;
    height:1px;
    position:absolute;
    top:0px;
    background-color:yellow;
`
    
export const Theta = styled.span`
    position:absolute;
    top:200px;
    width:200px;
    height:4px;
    // background-color:black;
    background-color: ${({darkmode}) => darkmode ? darkLight : 'black'}
`

// export const ValueDisplay = styled.div`
//     position:absolute;
//     height:40px;
//     width:40px;
//     padding:2px;
//     background-color:rgb(240, 240, 240);
//     display:flex;
//     z-index:2;
//     overflow:hidden;
//     transition: all 1000ms;

//     i {
//         position:absolute;
//         font-size:10px;
//         right:0px;
//         padding-right:2px;
//         background-color:rgb(240, 240, 240);
//     }
// `

export const SinPart = styled.span`
    position:absolute;
    height:${({radians}) => Math.abs(200*Math.sin(radians))}px;
    width:4px;
    background-color:red;
    left:-5px;
    bottom:24px;
    z-index:0;
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
    transition: all 1000ms;
`

export const CosPointer = styled.span`
    position:absolute;
    width:1px;
    height:1px;
    height:${({radians}) => Math.abs(200*Math.sin(radians))}px;
    z-index:1000;
    right:0px;
    border-left-style: dashed;
    border-left-width: 3px;
    transition: all 1000ms;
    color:${({darkmode}) => darkmode ? '#fff' : '#555'};
`

export const SinPointer = styled.span`
    position:absolute;
    // color:blue;
    height:2px;
    width:${({radians}) => Math.abs(200*Math.cos(radians))}px;
    z-index:1000;
    right:0px;
    border-top-style: dashed;
    border-top-width: 3px;
    transition: all 1000ms;
    color:${({darkmode}) => darkmode ? '#fff' : '#555'};
`

export const PointerOrigin = styled.span`
    position:absolute;
    width:1px;
    heigth:1px;
    right:0px;
`

export const TanLine = styled.span`
    position:absolute;
    width:200px;
    height:1px;
    color:${({darkmode}) => darkmode ? '#fff':'#555'};
    border-top-style: dashed;
    border-top-width: 3px;
    transition: all 1000ms;
`