import styled from "styled-components";
import { backgroundColors } from "../../../../global.styles";

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

    aside {
        height:100%;
        width:80px;
        right:5px;
        position:absolute;

        button {
            position:relative;
            margin:2px;
        }
    }
`

export const HistoryItem = styled.i`
    border-bottom: solid ${({darkmode}) => darkmode ? '#fff' : '#555' } 1px;
    padding:5px;
`

export const StandardToolbar = styled.div`
    height:40px;
    width:100%;
    bottom:80px;
    position:absolute;
    display:flex;
    background-color:${({darkmode}) =>darkmode ? dark : paper};

    button {
        height:30px;
        margin:5px;
        position:relative;
    }
`