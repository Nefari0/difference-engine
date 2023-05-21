import styled from "styled-components";
import { backgroundColors } from "../../global.styles";

const {
    paper,

    light,
    midLight,
    darkLight,

    lightDark,
    midDark,
    dark
} = backgroundColors

export const Standard = styled.div`
    position:absolute;
    font-size:20px;
    bottom:40px;
    width:90%;
    height:10%;
    background-color:${({darkmode}) =>darkmode ? dark : paper};
    color:${({darkmode}) => darkmode ? '#fff' : '#333'};
    z-index:1;
    border: solid 1px;
    border-radius:5px;
`

export const History = styled(Standard)`
    width:90%;
    height:75%;
    top:10px;
    left:30px;
    display:flex;
    flex-direction:column;
    overflow:scroll;
`

export const HistoryItem = styled.i`
    border:solid #555;
`