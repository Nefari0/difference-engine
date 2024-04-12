import styled, { css } from "styled-components"
import { TinyButton } from "../KeyPad/input.styles"
import { basicDark,basicLight } from "../global.styles"

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
    height:30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
    button {position:relative;}
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