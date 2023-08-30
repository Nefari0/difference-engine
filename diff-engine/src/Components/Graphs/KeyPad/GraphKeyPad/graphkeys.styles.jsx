import styled from "styled-components";

export const GraphKeyPad = styled.section`
    height:400px;
    width:500px;
    position:absolute;
    top:20px;
    left:10px;
    z-index:1;
    pointer-events:none;

    button {
        pointer-events:auto;
    }
`