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
    justify-content:space-around;

    p {
        font-size:20px;
        position:absolute;
    }   
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
    border-bottom:dashed 2px blue;
    width:${({L}) => L*lengthMultiplier}px;
    height:20px;
    margin-left:50px;
    position:relative;
    // background-color:blue;
    margin-bottom:10px;

    p {
        font-size:12px;
        font-weight:800;
        letter-spacing:1px;
        color:blue;
        right:0px;
        top:-40px;
        width:250px;
        height:16px;
        position:relative;
    }

    i {
        position:absolute;
        bottom:20px;
        right:-40px;
        width:50px;
        font-size:12px;
        letter-spacing:1px;
    }
`

const movingLengthColor = (darkmode) => { // Change color for better visibility between darkmode/lightmode.
    return (
        css
        `
            border-bottom:dashed 2px ${!darkmode ? 'orange' : 'yellow'};
            p { color:${!darkmode ? 'orange' : 'yellow'};}
        `
    )
}
export const MovingLength = styled(StationaryLength)`
    transition: all 1000ms;
    width:${({lengthContraction}) => isNaN(lengthContraction) ? lengthMultiplier : lengthContraction*lengthMultiplier}px;
    ${({darkmode}) => movingLengthColor(darkmode)}

    p {
        right:0px;
        position:relative;
    }
`

export const Wedge = styled.span`
    position:absolute;
    right:-10px;
    top:0px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid ${lightDark};
`

export const Error = styled.strong`${errorIndicator}`

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