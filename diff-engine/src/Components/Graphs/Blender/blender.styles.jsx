import styled from "styled-components";
import { KeyBox } from "../KeyPad/input.styles";
import { backgroundColors } from "../../../global.styles";

const { midDark,darkLight } = backgroundColors

export const BlenderKeys = styled(KeyBox)`
    background-color:${({darkmode}) => darkmode ? midDark : darkLight};
    display:flex;
    flex-direction:column;
    text-align:left;
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    left:0;
    border-radius:4px;
    
    form {
        height:300px;
        width:300px;
    }
`