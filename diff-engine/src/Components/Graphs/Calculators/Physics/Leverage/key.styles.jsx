import styled from "styled-components";

export const ValueButtonPad = styled.div`
    position:absolute;
    width:100px;
    height:300px;
    right:140px;
    display:flex;
    flex-direction:column;
    color:${({darkmode}) => darkmode ? '#fff' : 'black'}
`

export const Label = styled.p`
    top:-10px;
    width:100%;
    position:absolute;
`