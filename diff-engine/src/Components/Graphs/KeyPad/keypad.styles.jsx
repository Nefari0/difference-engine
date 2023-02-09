import styled, { css } from "styled-components";
import { backgroundColors } from "../global.styles";

// const { paper,light } = backgroundColors

const {
    paper,

    light,
    midLight,
    darkLight,

    lightDark,
    midDark,
    dark
} = backgroundColors

const keyMapOverlay = css`
    button {
        transition: all 500ms;
        overflow:visible;

        p {
            // position:absolute;
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
            border-radius: 0px 20px 20px;
        }

        pointer-events: none;
        transform: scale(.6)
    }
`

export const KeyBox = styled.div`
    ${({displayKeymap}) => displayKeymap && keyMapOverlay}
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
`

export const Param = styled.div`
    position:absolute;
    left:0px;
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
        font-weight:800;
    }

    &:hover {
        overflow:visible;
        z-index:1;
        box-shadow: inset 0 0 5px #555;
    }
`

export const Buttoni = styled.i`
    font-size:1px;
    letter-spacing:2px;
    font-weight:600;
`

export const EqualButton = styled(BaseButton)`
    background-color: #2e86c0;
    border-color: #337cac;
    width:100px;

    strong {
        font-size:40px;
        color: #fff;
    }
`

export const AllClearButton = styled(EqualButton)`
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
`

export const LargeButton = styled(BaseButton)`
    width:100px;
`

export const TinyButton = styled(BaseButton)`
    height:40px;
`