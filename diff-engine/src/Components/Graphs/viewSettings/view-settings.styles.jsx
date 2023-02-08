import styled from "styled-components"
import { TinyButton } from "../KeyPad/keypad.styles"

export const Zoom = styled(TinyButton)`
    right:20px;
    width:30px;
    height:30px;
    zIndex:2;

    // @media (max-width:620px) {display:none;}
    `
    
export const ZoomInButton = styled(Zoom)`
    // display:${({viewScale}) => viewScale >= .9 && 'none;'};
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
    left:0%;
    width:100px;
`

export const DarkmodeButton = styled(Zoom)`
    right:205px;
    width:100px;
`

export const ViewSettingsPanel = styled.div`
    position:absolute;
    top:-40px;
    // width:150px;
    width:100%;
    right:0px;
    height:30px;
`