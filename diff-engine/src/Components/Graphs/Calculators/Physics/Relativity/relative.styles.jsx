import styled, { css } from "styled-components";
import { errorIndicator,backgroundColors } from "../../../global.styles";
import { messageBox } from "../../../KeyPad/input.styles";

const { paper,dark,darkLight,lightDark } = backgroundColors

export const widthOfLeverBar = 400; // --- In pixels

export const RelativityContainer = styled.section`
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
    text-align:left;

    display:flex;
    flex-direction:column;

    p {
        font-size:20px;
        position:absolute;
    }

    strong {
        margin-left:50px;
        // opacity:.8;
        width:400px;
        border-bottom:solid 1px;
        font-size:16px;
        letter-spacing:1px;
    }
`

export const SolutionText = styled.i`
    padding:5px;
    width:100%;
    text-align:center;
`

export const ValueButtonPad = styled.div`
    position:absolute;
    width:150px;
    height:300px;
    right:100px;
    display:flex;
    flex-direction:column;
    color:${({darkmode}) => darkmode ? '#fff' : 'black'}
`

export const Label = styled.p`
    top:-10px;
    width:100%;
    position:absolute;
`

// Length Contraction //
export const lengthMultiplier = 400 // Adding pixels so object lengths can display on the screen.
export const StationaryLength = styled.div`
    transition: all 1000ms;
    border-bottom:dashed 3px blue;
    width:${({L}) => L*lengthMultiplier}px;
    height:50px;
    margin-left:50px;
    position:relative;

    p {
        font-size:16px;
        font-weight:600;
        letter-spacing:1px;
        color:blue;
        right:0px;
        bottom:-35px;
        width:250px;
        height:16px;
        position:relative;
    }

    i {
        position:absolute;
        bottom:20px;
        right:-40px;
        width:50px;
        font-size:14px;
        letter-spacing:1px;
    }
`

export const MovingLength = styled(StationaryLength)`
    transition: all 1000ms;
    width:${({lengthContraction}) => isNaN(lengthContraction) ? lengthMultiplier : lengthContraction*lengthMultiplier}px;
    border-bottom:dashed 3px orange;

    p {
        right:0px;
        position:relative;
        color:orange;
    }
`

export const Wedge = styled.span`
    position:absolute;
    right:-10px;
    // top:0px;
    bottom:0px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid ${lightDark};
`

export const Error = styled.i`
    ${errorIndicator}
    margin:5px;
    text-align:center;
`

export const RelativityInfo = styled.div`
    ${messageBox}
    text-align:left;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    top:-450px;
    left:5px;
    border-radius:20px 20px 20px 20px;
    font-size:10px;
    max-width:280px;
    transform-origin:5px 20px;
    z-index:10000; 
`