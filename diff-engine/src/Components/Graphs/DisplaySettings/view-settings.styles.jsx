import styled, { css } from "styled-components"
import { TinyButton } from "../KeyPad/input.styles"
import { backgroundColors,basicDark,basicLight } from "../global.styles"

const { paper } = backgroundColors

export const Zoom = styled(TinyButton)`
    right:20px;
    width:30px;
    height:30px;
    zIndex:2;
`

export const ZoomOutButton = styled(Zoom)`
    right:60px;
`

export const ArrowButton = styled(Zoom)`
    right:105px;
`

export const ResetViewButton = styled(ZoomOutButton)`
    right:100px;
    width:100px;
`

export const AboutButton = styled(Zoom)`
    left:0px;
    // top:50px;
    width:100px;
`

export const DarkmodeButton = styled(Zoom)`
    right:205px;
    width:100px;
`

export const ViewSettingsPanel = styled.div`
    position:absolute;
    top:-40px;
    width:100%;
    right:0px;
    height:30px;
`

export const ViewControlContainer = styled.div`
    position:relative;
    width:100px;
    min-height:130px;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    z-index:1;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    padding:10px;
    border-radius:10px;
    pointer-events:auto ;

    ${({darkmode}) => darkmode ? basicDark : basicLight}

    button {
        position:relative;
        margin:5px;
    }
`