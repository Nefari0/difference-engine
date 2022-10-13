import styled from "styled-components";

export const KeyBox = styled.div`
    position: relative;
    height: 200px;
    width: 500px;
    bottom:-600px;
    background-color: rgb(240, 240, 240);

    @media (max-width:620px) {
        transform: scale(0.70);
        left:-21%;
        bottom:-320px;
    }

    @media (max-width:400px) {
        transform: scale(0.50);
        left:-21%;
        bottom:-160px;
    }
`

export const BaseButton = styled.button`
    position:relative;
    width:75px;
    height:75px;
    border-radius:50%;
`

export const LargeButton = styled(BaseButton)`
    width:100px;
    height:100px;
    position:absolute;
`