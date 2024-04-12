import styled, {css} from "styled-components";
import { backgroundColors,widthParameters } from "./global.styles";

// const { dark,light,paper } = backgroundColors
const {
    paper,

    light,
    midLight,
    darkLight,

    lightDark,
    midDark,
    dark
} = backgroundColors

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

const shadow = css`box-shadow: 0px 5px 20px -7px #000000;`
export const Enclosure = styled.main`
    position:absolute;
    height:${enclosureHeight}px;
    width:${enclosureWidth}px;
    padding:${enclosurePadding}px;
    border-radius:10px;
    ${({fullscreen}) => !fullscreen && shadow}
    display:flex;
    flex-direction:column;
    // background-color:#B1BDC5;
    background-color:${({darkmode}) => darkmode ? midDark : darkLight};

    // top:${({viewScale}) => (parseInt(100*viewScale) !== 50 ? (-1*100%parseInt(viewScale*100)*9)/2 : (-220))}px;

    // TESTING
    top:${({viewScale,verticalAdjustment}) => (parseInt(100*viewScale) !== 50 ? ((-1*100%parseInt(viewScale*100)*9)/2)+verticalAdjustment : (-220))}px;
    // position:fixed;
    // top:0px;
    // right:0px;
    // top:-100px;

    @media (min-width:621px) {${largeEnclosure}}
    @media (max-width:620px) {${mediumEnclosure}}
    @media (max-width:400px) {${smallEnclosure}}
    
    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
        font-size:30px;
    }
`