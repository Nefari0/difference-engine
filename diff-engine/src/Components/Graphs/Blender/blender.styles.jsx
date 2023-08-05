import styled from "styled-components";
import { KeyBox } from "../KeyPad/input.styles";

export const BlenderKeys = styled(KeyBox)`
    display:flex;
    flex-direction:column;
    text-align:left;

    a {
        position:relative;
        font-size:20px;
        left:0px;
        margin:8px;
        color:${({darkmode}) => darkmode ? '#fff' : '#555'};
        cursor:pointer;
    }
`

// export const Blendera = styled.a`
//     position:relative;
//     font-size:20px;
//     left:0px;
//     margin:8px;
// `