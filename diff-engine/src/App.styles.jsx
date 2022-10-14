import styled from "styled-components";

export const AppContainer = styled.main`
    position:relative;
    font-family: sans-serif;
    text-align: center;
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
`

export const Adapter = styled.section`
    position:relative;
    margin:auto;
    margin-top:50px;
    width:500px;
    height:700px;

    @media (max-width:620px) {
        width:350px;
    }

    @media (max-width:400px) {
        width:300px;
    }
`