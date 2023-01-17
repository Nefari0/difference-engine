import styled from "styled-components";

export const KeymapContainer = styled.div`
    position:absolute;
    opacity:0;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    z-index:1;
    bottom:0px;
    width:500px;
    height:500px;
    background-color:#fff;

    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: baseline;

    h1 {
        position:absolute;
        top:0px;
        right:40%;
        opacity:1;
    }
`