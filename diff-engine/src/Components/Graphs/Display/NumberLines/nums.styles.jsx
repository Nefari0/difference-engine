import styled from "styled-components";
import { backgroundColors } from "../../global.styles";
import { basicDark,basicLight } from "../../global.styles";

const { dark,paper} = backgroundColors

export const Numbers = styled.ul`
    position:absolute;
    width:1000px;
    height:5px;
    margin:0px;
    padding:0px;
    bottom:${({parameters}) => parameters.lineB}px;
    left:${({parameters}) => parameters.lineL}px;
    list-style:none;
    display:flex;
    align-items:flex-end;
    transform:rotate(${({parameters}) => parameters.lRotation}deg);
    background-color:${({darkmode}) => darkmode ? dark : paper};
    // background-color:orange;
    z-index:1;

    li {
        position:relative;
        height:49px;
        // margin:2px;
        width:49px;
        // border:solid 1px white;
        // background-color:purple;

        strong {
            position:absolute;
            background-color:${({darkmode}) => darkmode ? dark : paper};
            color:${({darkmode}) => !darkmode ? '#555' : '#fff'};
            // right:${({parameters}) => parameters.strongR}px;
            right:2px;
            bottom:${({parameters}) => parameters.strongB}px;
            transform:rotate(${({parameters}) => parameters.numRotation}deg);
            background-color:blue;
            color:white;
        }
    }
`