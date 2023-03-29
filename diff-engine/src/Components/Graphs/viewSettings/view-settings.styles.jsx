import styled, { css } from "styled-components"
import { TinyButton } from "../KeyPad/keypad.styles"
import { backgroundColors } from "../global.styles"
import { basicDark,basicLight } from "../global.styles"

const { paper,midDark } = backgroundColors

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
    left:0%;
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
const fadeOut = css`
    visibility: hidden;
    opacity: 0;
    transition: visibility 2s 2s, opacity 2s linear;
`
export const ResetViewMessage = styled.div`
& { position: absolute;
    ${({darkmode}) => darkmode ? basicDark : basicLight}
    width: 200px;
    height: 60px;
    border-radius: 5px;
    visibility: visible;
    opacity: 1;
    transform: translateX(165px) translateY(40px) rotate(0);
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36,.5);
    z-index: 3;
    font-size:12px;

    ${({hovered}) => hovered && fadeOut}
}

&:after {
    content: "";
    position: absolute;
    bottom: 95px;
    width: 0;
    height: 0;
    border-right: solid 10px ${({darkmode}) => darkmode ? midDark : paper};
    border-bottom: 33px solid transparent;
    border-left: 10px solid transparent;
    transform: translateX(45px) translateY(42px)  rotate(90deg);
    z-index: 0;
}

    p {
        font-weight:600;
    }
`

