import styled, { css } from "styled-components";
import { backgroundColors } from "../../../global.styles";

const { paper,dark } = backgroundColors
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
    border-bottom:dashed 2px red;
    width:${({L}) => L*lengthMultiplier}px;
    margin-left:50px;
    position:relative;

    p {
        font-weight:600;
        letter-spacing:1px;
        color:red;
        right:0px;
        width:250px;
        // background-color:green;
        // transform-origin: 50px 50px;
        // position:absolute;
        position:relative;
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
    width:${({lengthContraction}) => lengthContraction*lengthMultiplier}px;
    ${({darkmode}) => movingLengthColor(darkmode)}

    p {
        right:0px;
        position:relative;
    }
`