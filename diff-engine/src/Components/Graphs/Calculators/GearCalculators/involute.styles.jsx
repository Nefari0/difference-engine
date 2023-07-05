import styled from "styled-components";
import { backgroundColors } from "../../global.styles";

const { midLight } = backgroundColors
const width = 400

const scale = 200

// export const ToothWidthContainer = styled.section`
//     position:absolute;
//     font-size:20px;
//     bottom:40px;
//     width:40%;
//     height:40%;
//     background-color:#fff;
//     border: solid 1px;
//     border-radius:5px;
//     z-index:1;

//     p {
//         font-size:40px;
//     }
// `

export const CogContainer = styled.div`
    position:relative;
    top:-205px;
    left:-200px;
    right:400px;
    height:${width}px;
    width:${width}px;
    background-color:green;
    // transform-origin: center;
    // transform: translate(50%, 50%) translate(0%, 0%);

    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
    }

    a {
        color: ${({darkmode}) => darkmode ? midLight : 'blue'};
    }
`

export const ReferenceCircle = styled.div`
    // position:relative;
    // position:absolute;
    width: ${({mathFunc}) => (25+mathFunc/2)}px;
    height: ${({mathFunc}) => (25+mathFunc/2)}px;
    // border: solid;
    border: solid 5px;
    border-radius:50%;
    `
    // left:${({mathFunc}) => -mathFunc/2}px;
    // top:${({mathFunc}) => -mathFunc/2}px;

// background-color:purple;
// left: ${({mathFunc}) => -25-(mathFunc)/2}px;
// width: ${({mathFunc}) => 25+(mathFunc*2)}px;
// height: ${({mathFunc}) => 25+(mathFunc*2)}px;
export const TipCircle = styled.div`
position:absolute;
    width: ${({tipDiameter}) =>(tipDiameter)/2}px;
    height: ${({tipDiameter}) =>tipDiameter}px;
    border: solid 1px;
    border-radius:50%;
    // margin:auto;
    // transform: scale(2.60);
    transform: translate(-50%, -50%);
    
    `
    // transform: translate(${({mathFunc}) => (width/2)+(-25-mathFunc/2) }px, 0%);
    // transform: translate(50%, ${width/2}px) translate(0%, 0%);
    // transform-origin: 10px 100px;

export const BaseCircle = styled(TipCircle)`
    width: ${({baseCircle}) => ((25+(baseCircle)/2)*.9396950000000001)}px;
    height: ${({baseCircle}) => ((25+(baseCircle/2))*.9396950000000001)}px;
    // background-color:blue;
    border:solid 2px yellow;
`

export const CogOrigin = styled.div`
    height:1px;
    width:1px;
    z-index:1000;
    // background-color:blue;
    border-radius:50%;

    position:absolute;
    // transform: rotate(30deg);
    // transform-origin: 500px 500px;
    transform: translate(${width/2}px, ${width/2}px);
`