import styled from "styled-components";

export const Toolbar = styled.section`
    width:60px;
    height:500px;
    // height:200px;
    // background-color:blue;
    // position:relative;
    position:absolute;
    // bottom:40px;
    z-index:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    

    button {
        position:relative;
        left:0px;
        margin:2px;
        height:50px;
        width:50px;
    }
`