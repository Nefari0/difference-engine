import styled, {css} from "styled-components";
import { TinyButton } from "./KeyPad/keypad.styles";

const smallEnclosure = css`
    transform: scale(.5);
    top:-35%;
    left:-36%;
`
// top:-${({viewScale}) => (((10-parseInt(viewScale*10))*50).toString())}px;
// transform: scale(${({viewScale}) => viewScale});

const mediumEnclosure = css`
    transform: scale(0.70);
    left:-24%;
    top:-21%;    
`
    // transform: scale(${({viewScale}) => viewScale});
    // left:-24%;
    // top:-${({viewScale}) => (((10-parseInt(viewScale*10))*50).toString())}px;


export const Enclosure = styled.main`
    position:absolute;
    height:900px;
    width:495px;
    padding:10px;
    border-radius:10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display:flex;
    flex-direction:column;
    @media (max-width:620px) {${mediumEnclosure}}
    @media (max-width:400px) {${smallEnclosure}}
    transform: scale(1)
    // transform: scale(${({viewScale}) => viewScale});
    // top:-${({viewScale}) => (((10-parseInt(viewScale*10))*50).toString())}px;
    
    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
        font-size:30px;
    }
    `

export const Table = styled.div`
    position: absolute;
    opacity:.8;
    height: 500px;
    width: 500px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    border: 2px solid rgba(0, 0, 0, 0.5);
    z-index: 0;
    overflow:hidden;
    left:5px;

    @media (max-height:400px) {
        transform: scale(0.60);
        top:120px;
    }
`

export const Row = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    z-index:1;
`

export const Origin = styled.span`
    height:1px;
    width:1px;
    position: absolute;
    left: ${({polars}) => (!polars ? `125px` : `250px`)};
    transition: all 1000ms;
    bottom:235px;
`

export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    position: relative;
    margin: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`

export const MathFormula = styled.div`
    position:absolute;
    top:0px;
    right:40px;
    font-size:20px;
`