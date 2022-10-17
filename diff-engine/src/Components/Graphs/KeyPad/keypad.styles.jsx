import styled from "styled-components";

export const KeyBox = styled.div`
    position: relative;
    height: 200px;
    width: 500px;
    bottom:-512px;

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
    border-radius:50%;
    background-color:rgb(340, 340, 340);
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
    position:absolute;
`