import styled, { css } from "styled-components"
import { TinyButton } from "../KeyPad/input.styles"
import { basicDark,basicLight,backgroundColors,widthParameters } from "../../../global.styles"
import { OverLay } from "../../../App.styles"

export const Zoom = styled(TinyButton)`
    height:30px;
    zIndex:2;
`

export const ResetViewButton = styled(Zoom)`width:100px;`

export const AboutButton = styled(Zoom)`width:100px;`

export const DarkmodeButton = styled(Zoom)`width:100px;`

export const ViewSettingsPanel = styled.div`
    position:absolute;
    top:-40px;
    width:100%;
    right:0px;
    height:${widthParameters.viewSettingsHeight}px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
    button {position:relative;}
`

export const ViewControllerOverlay = styled(OverLay)`
    flex-direction:column;
    justify-content:flex-start;
`

export const ViewControlContainer = styled.div`
    position:relative;
    width:100px;
    min-height:130px;
    margin:20px auto 0px auto;
    display:flex;
    flex-wrap:wrap;
    z-index:1;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    padding:10px;
    border-radius:10px;
    pointer-events:auto;

    ${({darkmode}) => darkmode ? basicDark : basicLight}

    button {
        position:relative;
        margin:5px;
    }
`

export const DeviceSelectionContainer = styled.form`
    width:200px;
    min-height:200px;
    position:absolute;
    z-index:2;
    text-align:left;
    list-style-type:none;
    display-flex;
    flex-direction:column;
    pointer-events:auto;
    padding:10px;
    ${({darkmode}) => darkmode ? basicDark : basicLight}
    
    button {
        position:relative;
        width:95%;
        height:20px;
        border-radius:5px;
    }
`

const fadeOut = css`
    visibility: hidden;
    opacity: 0;
    transition: visibility 2s 2s, opacity 2s linear;
`
export const ResetViewMessage = styled.div`
    & { 
        position: absolute;
        background-color:${backgroundColors.paper};
        color:${backgroundColors.midDark};
        width: 200px;
        height: 100px;
        // border-radius: 5px;
        border-radius: 0px 20px 20px 20px;
        visibility: visible;
        opacity: 1;
        transform: translateX(75px) translateY(10px) rotate(0);
        box-shadow:10px 5px 60px 10px rgba(36, 36, 36,.5);
        z-index: 3;
        font-size:12px;
        left:-20px;
        top:20px;

        ${({visited}) => visited && fadeOut}
    }


    p {
        font-weight:600;
    }
`