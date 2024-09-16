import styled, {css} from "styled-components";
import { backgroundColors,widthParameters } from "../../global.styles";

// const { dark,light,paper } = backgroundColors
const {
    // paper,

    // light,
    // midLight,
    darkLight,

    // lightDark,
    midDark,
    // dark
} = backgroundColors

const {
    enclosurePadding,
    enclosureHeight,
    enclosureWidth,
} = widthParameters

// --- App dimension parameters (These values may change) --- //
// enclosureHeight = 900
// enclosureWidth = 495
// enclosurePadding = 10
// original scale sizes: .5, .7, 1

const transformation = css`transform: scale(${({viewScale}) => viewScale});`
const shadow = css`box-shadow: 0px 5px 20px -7px #000000;`
const xSmallEnclosure = css`left:-42%;`
const smallEnclosure = css`left:-36%;`
const mediumEnclosure = css`left:-24%;`

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
    top:${({viewScale,verticalAdjustment}) => (parseInt(100*viewScale) !== 50 ? ((-100%parseInt(viewScale*100)*9)/2)+verticalAdjustment : (-220))}px;

    @media (max-width:620px) {${mediumEnclosure}}
    @media (max-width:400px) {${smallEnclosure}}
    @media (max-width:300px) {${xSmallEnclosure}}
    ${transformation}
    
    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
        font-size:30px;
    }
`