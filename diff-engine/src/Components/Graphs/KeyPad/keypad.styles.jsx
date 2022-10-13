import styled from "styled-components";

export const KeyBox = styled.div`
    position: relative;
    height: 200px;
    width: 500px;
    bottom:-512px;
`

export const BaseButton = styled.button`
    position:relative;
    width:75px;
    height:75px;
    border-radius:50%;
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
    position:absolute;
`