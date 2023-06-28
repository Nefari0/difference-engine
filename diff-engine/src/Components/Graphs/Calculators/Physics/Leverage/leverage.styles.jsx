import styled from "styled-components";
import { backgroundColors } from "../../../global.styles";

const { paper,dark } = backgroundColors

export const LeverageDisplayContainer = styled.section`
    position:absolute;
    font-size:20px;
    bottom:0px;
    width:100%;
    height:70%;
    background-color:${({darkmode}) => darkmode ? dark:paper};
    color:${({darkmode}) => darkmode ? '#fff':'black'};
    border: solid 1px;
    border-radius:5px;
    z-index:1;

    p {
        font-size:20px;
        position:absolute;
    }   
`

export const LeverBar = styled.div`
    position:relative;
    width:400px;
    height:20px;
    // background-color:blue;
    margin:auto;
    top:150px;
    border-top: solid;
`

export const Fulcrum = styled.span`
    i {
        margin-left:10px;
    }

    svg {
        height:40px;
    }
`

export const ValDisplay = styled.div`
    top:80px;
    position:absolute;
    width:100px;
    height:100px;
    display:flex;
    justify-content:center;
    align-item:center;
`

export const InputForceValue = styled(ValDisplay)`
    left:10px;
    border-radius:50%;
    // background-color:blue;
    border:solid;

    strong {
        margin:auto;
    }
`

export const OutputForceValue = styled(InputForceValue)`
    left:390px;
`

export const Length = styled.i`
    position:absolute;
`

export const TotalLength = styled(Length)`    
    font-size:20px;
    top:100px;
    left:190px;
`

export const D_eLength = styled(Length)`
    // font-size:10px;
    top:190px;
    left:60px;
    
    svg {
        position:absolute;
        top:30px;
        left:20px;
    }
`

export const D_rLength = styled(D_eLength)`
    left:380px;
`