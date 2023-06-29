import styled, { css } from "styled-components"

// color pallete:
const tier1 = '#FFFFFF'
const tier2 = '#DADDE2'
const tier3 = '#B1BDC5'
const tier4 = '#889FA5'
const tier5 = '#628281'
const tier6 = '#43655A'

export const backgroundColors = {
    paper:'rgb(240, 240, 240)',
    light:tier1,
    midLight:tier2,
    darkLight:tier3,

    lightDark:tier4,
    midDark:tier5,
    dark:tier6,

    blue:'#2e86c0',
    red:'#f0595f',
    white:'#fff'
}

// --- Global app size parameters --- //
const enclosureHeight = 900
const enclosureWidth = 495
const enclosurePadding = 10

// const widthPercent = (enclosureWidth+(enclosurePadding*2))/100

export const widthParameters = {
    enclosureHeight:enclosureHeight,
    enclosureWidth:enclosureWidth,
    enclosurePadding:enclosurePadding,
    // widthPercent:widthPercent,
}
// -------------------- // 

export const basicDark = css`
    background-color:${backgroundColors.midDark};
    color:${backgroundColors.paper};
`
export const basicLight = css`
    background-color:${backgroundColors.paper};
    color:#555;
`

export const errorIndicator = css`
    background-color:red;
    color:white;
    animation: blinker 1s linear infinite;
            
    @keyframes blinker {
        50% {
        opacity: .5;
        }
    }
`