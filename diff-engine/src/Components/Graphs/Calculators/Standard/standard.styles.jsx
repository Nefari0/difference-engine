import styled from "styled-components";
import { backgroundColors } from "../../global.styles";

const {
    paper,

    // light,
    // midLight,
    // darkLight,

    // lightDark,
    // midDark,
    dark
} = backgroundColors

export const Standard = styled.div`
    position:absolute;
    bottom:0px;
    width:100%;
    height:15%;
    background-color:${({darkmode}) =>darkmode ? dark : paper};
    color:${({darkmode}) => darkmode ? '#fff' : '#333'};
    z-index:1;
    border: solid 1px;
    border-radius:5px;
    font-size:30px;
`
    
export const History = styled(Standard)`
    font-size:20px;
    width:100%;
    height:75%;
    top:0px;
    display:flex;
    flex-direction:column;
    overflow:scroll;
    text-align:left;
`

export const HistoryItem = styled.i`
    border-bottom: solid ${({darkmode}) => darkmode ? '#fff' : '#555' } 1px;
    padding:5px;
`