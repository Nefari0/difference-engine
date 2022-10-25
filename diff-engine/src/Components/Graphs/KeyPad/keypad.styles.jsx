import styled from "styled-components";

export const KeyBox = styled.div`
    position: relative;
    height: 200px;
    width: 500px;
    bottom:-512px;

    button {position:absolute;}

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
    // box-shadow: -1px -1px 5px 5px #ccc;
    background-color:#fff;
    font-weight:600;
    box-shadow: inset 0 0 5px #555;

    &:hover {
        // box-shadow: inset 0 0 5px #555;
        box-shadow: -1px -1px 5px 5px #ccc;
    }
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
    position:absolute;
`

export const CloseHelp = styled(BaseButton)`
    position:absolute;

    strong {
        font-size:30px;
        font-weight:200;
        opacity:.8;
    }
`