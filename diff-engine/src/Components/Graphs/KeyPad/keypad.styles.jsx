import styled, { css } from "styled-components";

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

// --- For displaying information about keys --- //
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
    position:absolute;
    width:75px;
    height:75px;
    border-radius:10px;
    background-color:#fff;
    color:555;
    font-weight:600;
    box-shadow: inset 0 0 5px #555;
    overflow:hidden;
    z-index:0;

    p {
        position:absolute;
        color:#555;
        font-weight:200;
        transition: all 500ms;
        transform: scale(0);
        z-index:1;
    }

    &:hover {
        overflow:visible;
        z-index:1;
        box-shadow: -1px -1px 5px 5px #ccc;
    }
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
`

export const TinyButton = styled(BaseButton)`
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