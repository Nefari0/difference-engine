import styled from "styled-components";

export const AlertContainer = styled.div`
    position:absolute;
    height:200px;
    width:400px;
    background-color:#fff;
    z-index:1000000000000000000000000;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    left:50px;
    top:150px;
    padding:10px;

    @media (max-height:400px) {
        top:250px;
    }
`