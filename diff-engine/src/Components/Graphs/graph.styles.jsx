import styled, {css} from "styled-components";
import { TinyButton } from "./KeyPad/keypad.styles";
import { backgroundColors,widthParameters } from "./global.styles";

const { dark,light,paper } = backgroundColors
const {
    enclosurePadding,
    enclosureHeight,
    enclosureWidth,
    maxWidth,
    widthPercent
} = widthParameters

// --- App dimension parameters --- //
// enclosureHeight = 900
// enclosureWidth = 495
// enclosurePadding = 10
// widthPercent = (enclosureWidth+(enclosurePadding*2))/100
// maxWidth = window.innerWidth+enclosurePadding/widthPercent

// original scale sizes: .5, .7, 1



const transformation = css`
    transform: scale(${({viewScale}) => viewScale});
`

const smallEnclosure = css`
    left:-36%;
    ${transformation}
`

const mediumEnclosure = css`
    ${transformation}
    left:-24%;
`

const largeEnclosure = css`
    ${transformation}
`


export const Enclosure = styled.main`
    position:absolute;
    height:${enclosureHeight}px;
    width:${enclosureWidth}px;
    padding:${enclosurePadding}px;
    border-radius:10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display:flex;
    flex-direction:column;
    background-color:#B1BDC5;
    top:${({viewScale}) => (parseInt(100*viewScale) !== 50 ? (-1*100%parseInt(viewScale*100)*9)/2 : (-220))}px;

    @media (min-width:621px) {${largeEnclosure}}
    @media (max-width:620px) {${mediumEnclosure}}
    @media (max-width:400px) {${smallEnclosure}}
    
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
    // background-color: rgb(240, 240, 240);
    // background-color: #252525;
    background-color:${({darkmode}) => darkmode ? dark : paper};
    // background-color:${light};
    // color: #fff;
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
    // border:1px solid #fff;
    border:1px solid ${({darkmode}) => !darkmode ? dark : light};
`

export const MathFormula = styled.div`
    position:absolute;
    top:0px;
    right:40px;
    font-size:20px;
    font-weight:800;
    color:${({darkmode}) => darkmode ? '#fff' : '#555'};
`