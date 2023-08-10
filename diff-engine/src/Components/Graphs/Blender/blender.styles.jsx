import styled from "styled-components";
import { KeyBox } from "../KeyPad/input.styles";
import { messageBox } from "../KeyPad/input.styles";

export const BlenderKeys = styled(KeyBox)`
    display:flex;
    flex-direction:column;
    text-align:left;

    form {
        height:300px;
        width:300px;
    }

    `
    // p {
    //     ${messageBox}
    //     display:${({displayKeymap}) => !displayKeymap && 'none'};
    // }