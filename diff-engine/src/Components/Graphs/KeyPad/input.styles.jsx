import styled, { css } from "styled-components";
import { backgroundColors } from "../global.styles";

const {
    paper,

    light,
    midLight,
    darkLight,

    lightDark,
    midDark,
    dark,
    red,blue
} = backgroundColors

const messageBox = css`
    position:absolute;
    background-color:#fff;
    transition: all 500ms;
    color:#555;
    display:inline;
    transform: scale(1.7);
    left:20px;
    top:70px;
    padding:4px;
    font-weight:600;
    box-shadow: 0px 5px 20px -7px #000000;
    border-radius:2px;
    border: solid .5px;
    z-index:2;

    border-radius: 0px 20px 20px 20px; // ORIGINAL / DEFAULT
`

export const InfoMessage = styled.p`${messageBox}`

const ButtonOverlay = css`

        transition: all 500ms;
        overflow:visible;
        z-index:1000;

        p {${messageBox}}

        pointer-events: none;
        transform: scale(.6)

`
export const KeyBox = styled.div`
    position: relative;
    height: 200px;
    width: 500px;
    bottom:-512px;
    
    button {
        transition: all 500ms;
    }

    i {
        font-size:50px;
    }

    a {
        color: ${({darkmode}) => darkmode ? midLight : 'blue'};
    }
`

// --- THIS WLL REPLACE "Param" ABOVE --- //
const smallInput = css`position:absolute;left:0px;`
const largeInput = css`
    bottom:-505px;
    height:60px;
    width:500px;
    left:-6px;
`
export const InputWrapper = styled.form`
    ${({inputClass}) => inputClass==='small' ? smallInput : largeInput}
`
    
export const BaseInput = styled.input`
    background-color:${({darkmode}) => darkmode ? lightDark : paper};
    color:${({darkmode}) => darkmode ? '#fff' : '#555'};
    position:relative;
    border:none;
    font-size:40px;
    z-index:100000000;
`

export const ParamInput = styled(BaseInput)`
    width:100px;
`

export const DisplayScreen = styled(BaseInput )`
    bottom:-505px;
    height:60px;
    width:500px;
    left:-6px;
`
const LightsOff = css`background-color:${lightDark};color:#fff; `
const lightsOn = css`background-color:${midLight};color:#333;`

export const BaseButton = styled.button`
    position:absolute;
    width:75px;
    height:75px;
    border-radius:10px;
    overflow:hidden;
    z-index:0;
    border: 1px solid #c4c4c4;

    ${({darkmode}) => darkmode ? LightsOff : lightsOn}

    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);

    p {
        position:absolute;
        font-weight:200;
        transition: all 500ms;
        transform: scale(0);
        z-index:1;
    }
    
    strong {
        opacity:1;
        font-weight:600;
    }



    &:hover {
        overflow:visible;
        z-index:1;
        box-shadow: inset 0 0 5px #555;
    }

    ${({displayKeymap}) => displayKeymap && ButtonOverlay}
    `

export const Buttoni = styled.i`
    font-size:1px;
    letter-spacing:2px;
    font-weight:600;
`

export const EqualButton = styled(BaseButton)`
    background-color: ${blue};
    border-color: #337cac;
    width:100px;

    strong {
        font-size:40px;
        color: #fff;
    }
`
    
export const AllClearButton = styled(EqualButton)`
    background-color: ${red};
    border-color: #b0353a;
    color: #fff;

    strong {
        font-weight:200;
    }
`

export const OperatorButton = styled(BaseButton)`
    color:#2e86c0;
    background-color:${({darkmode}) => darkmode && darkLight}
`

export const HelpButton = styled(BaseButton)`
    color:#f0595f;
    font-size:32px;
    
    strong {
        font-size:42px;
        animation: blinker 1s linear infinite;
        
        @keyframes blinker {
            50% {
              opacity: .5;
            }
          }
    }
    
    background-color:${({darkmode}) => darkmode && darkLight}
`

export const Translucent = styled(BaseButton)`
    background-color:rgba(${({darkmode}) => !darkmode ? '177, 189, 197, .3' : '136, 159, 165, .3'});
`

export const LargeButton = styled(BaseButton)`
    width:100px;
`

export const TinyButton = styled(BaseButton)`
    height:40px;
`