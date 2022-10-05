import styled from "styled-components";

export const AppContainer = styled.main`
    position:relative;
    font-family: sans-serif;
    text-align: center;
    width:100vw;
`

export const Adapter = styled.section`
    position:relative;
    margin:auto;
    margin-top:20px;
    width:500px;
    height:500px;

    @media (max-width:620px) {
        width:350px;
        height:350px;
    }
`