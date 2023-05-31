import styled from "styled-components";
import { backgroundColors } from "../../global.styles";

const { dark,paper } = backgroundColors
const neg5 = -5
export const Numbers = styled.ul`
    position:absolute;
    width:1225px;
    margin:0px;
    padding:0px;
    bottom:${({parameters}) => parameters.lineB}px;
    left:${({parameters}) => parameters.lineL}px;
    list-style:none;
    display:flex;
    align-items:flex-end;
    transform:rotate(${({parameters}) => parameters.lRotation}deg);

    li {
        position:relative;
        height:48px;
        margin:2px;
        width:48px;
        z-index:10000000000;

        strong {
            position:absolute;
            // background-color:#FFF5FF;
            // background-color: #252525;
            background-color:${({darkmode}) => darkmode ? dark : paper};
            color:${({darkmode}) => !darkmode ? '#555' : '#fff'};
            padding:2px;
            right:${({parameters}) => parameters.strongR}px;
            bottom:${({parameters}) => parameters.strongB}px;
            transform:rotate(${({parameters}) => parameters.numRotation}deg);
        }
    }
`