import { css } from "styled-components"

// color pallete:
const tier1 = '#FFFFFF'
const tier2 = '#DADDE2'
const tier3 = '#B1BDC5'
const tier4 = '#889FA5'
const tier5 = '#628281'
const tier6 = '#43655A'

export const backgroundColors = {
    paper:'rgb(240, 240, 240)',
    // Light
    light:tier1,
    midLight:tier2,
    darkLight:tier3,

    // Dark
    lightDark:tier4,
    midDark:tier5,
    dark:tier6,

    // Other colors
    blue:'#2e86c0',
    red:'#f0595f',
    white:'#fff',

    // Transition
    transition:'transition: all 100ms;'
}

// --- Global app size parameters --- //
const enclosureHeight = 900
const viewSettingsHeight = 30
const enclosureWidth = 495
const enclosurePadding = 10
const headerHight = 40

// --- Viewport dimensions --- //
export const viewPortSize = 500

// const widthPercent = (enclosureWidth+(enclosurePadding*2))/100

export const widthParameters = {
    enclosureHeight:enclosureHeight,
    enclosureWidth:enclosureWidth,
    enclosurePadding:enclosurePadding,
    headerHight:headerHight,
    viewSettingsHeight:viewSettingsHeight
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
    background-color:${backgroundColors.red};
    color:white;
    animation: blinker 1s linear infinite;
            
    @keyframes blinker {
        50% {
        opacity: .5;
        }
    }
`