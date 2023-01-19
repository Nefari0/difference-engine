import styled from "styled-components"
import { TinyButton } from "../KeyPad/keypad.styles"

export const Zoom = styled(TinyButton)`
    right:20px;
    width:30px;
    height:30px;
    // top:-40px;
    opacity:.4;
    zIndex:2;

    // @media (max-width:620px) {display:none;}
    `
    
export const ZoomInButton = styled(Zoom)`
    // display:${({viewScale}) => viewScale >= .9 && 'none;'};
`

export const ZoomOutButton = styled(Zoom)`
    right:60px;
`

export const ResetViewButton = styled(ZoomOutButton)`
    right:105px;
    width:100px;
`

export const ViewSettingsPanel = styled.div`
    position:absolute;
    top:-40px;
    width:150px;
    right:0px;
    height:30px;
`