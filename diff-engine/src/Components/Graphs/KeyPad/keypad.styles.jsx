import styled, { css } from "styled-components";

const keyMapOverlay = css`
button {
        transition: all 500ms;
        overflow:visible;

        p {
            background-color:#fff;
            transition: all 500ms;
            color:#555;
            display:inline;
            z-index:1;
            transform: scale(1.7);
            left:80px;
            padding:4px;
            font-weight:600;
            box-shadow: 0px 5px 20px -7px #000000;
            border-radius:2px;
            border: solid .5px;
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
        transition: all 1000ms;
        position:absolute;
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
    background-color: rgb(240, 240, 240);
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

export const BaseButton = styled.button`
    position:relative;
    width:75px;
    height:75px;
    border-radius:10px;
    background-color:#fff;
    color:555;
    font-weight:600;
    box-shadow: inset 0 0 5px #555;
    overflow:hidden;

    p {
        position:absolute;
        color:#555;
        font-weight:200;
        transition: all 500ms;
        transform: scale(0);
    }

    &:hover {
        overflow:visible;
        z-index:100000;
        box-shadow: -1px -1px 5px 5px #ccc;
        
        p { 
            box-shadow: -1px -1px 5px 5px #ccc;
            transition: all 500ms;
            transform: scale(1);
            position:absolute;
            width:200px;
            min-height:50px;
            background-color:#fff;
            border-radius:10px;
            display:block;
            opacity:1;
            font-size:20px;
        }
    }
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
    position:absolute;
`

export const TinyButton = styled(BaseButton)`
    position:absolute;
    height:40px;
`

export const CloseHelp = styled(BaseButton)`
    position:absolute;

    strong {
        font-size:30px;
        font-weight:200;
        opacity:.8;
    }
`