import styled from "styled-components";

export const NumPad = styled.section`
    position:absolute;
    width:315px;
    height:320px;

    button {
        position:absolute;

        strong {
            font-size:40px;
            font-weight:600;
        }
    }
`

export const OperatorPad = styled(NumPad)`
    width:78.75px;
    right:85px;

    button {
        right:0px;
    }
`