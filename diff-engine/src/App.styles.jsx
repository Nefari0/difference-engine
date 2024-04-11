import { backgroundColors } from "./Components/Graphs/global.styles";
import { widthParameters } from "./Components/Graphs/global.styles";
import styled from "styled-components";

const {
    light,
    darkLight,

    lightDark,
    // midDark,
    // dark
} = backgroundColors
const {enclosureWidth,enclosurePadding} = widthParameters

export const Header = styled.header`
    background-color:${({darkmode}) => !darkmode ? light:darkLight};
    width:100vw;
    height:40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);

    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;

    h1 {
        font-size:32px;
        height:40px;
        font-weight:200;
        color:#555;
        text-align:left;
        padding-left:5px;
        font-family: 'Silkscreen', cursive;
        margin:0px;

        @media (max-width:550px) {
            font-size:20px;
        }
    }
`

export const ImageContainer = styled.div`
    position:absolute;
    right:50px;
    top:20px;
    width:25px;
    height:25px;
    border-radius:50%;
    overflow:hidden;

    img {
        position:absolute;
        left:-12px;
        top:-5px;
        width:50px;
        height:auto;
    }
`

// --- For displaying small components at center of app --- //
export const OverLay = styled.div`
    width:100%;
    height:50%;
    position:absolute;
    z-index:100;
    display:flex;
`

export const AppContainer = styled.main`
    position:absolute;
    text-align: center;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    background-color:${({darkmode}) => darkmode ? lightDark : light};

    @media (max-height:1080px) {
        height:1090px;
    }
`

export const Adapter = styled.section`
    position:relative;
    margin:auto;
    margin-top:50px;
    width:${(enclosurePadding*2)+enclosureWidth}px;
    height:1000px;

    @media (max-width:620px) {
        width:350px;
    }

    @media (max-width:400px) {
        width:300px;
    }
`

export const Footer = styled.footer`
    width:100vw;
    height:80px;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
`