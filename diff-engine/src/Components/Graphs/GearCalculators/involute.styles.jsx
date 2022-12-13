import styled from "styled-components";

export const ToothWidthContainer = styled.section`
    position:absolute;
    font-size:20px;
    bottom:40px;
    width:40%;
    height:40%;
    background-color:#fff;
    border: solid 1px;
    border-radius:5px;
    z-index:1;

    p {
        font-size:40px;
    }
`

export const CogContainer = styled.div`
    position:relative;
    top:-220px;
    left:-200px;
    height:400px;
    width:400px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
`

export const ReferenceCircle = styled.div`
    position:relative;
    width: ${({mathFunc}) => mathFunc*2}px;
    height: ${({mathFunc}) => mathFunc*2}px;
    border: solid;
    border-radius:50%;

    margin:auto;

`

export const CogOrigin = styled.div`
    height:5px;
    width:5px;
    background-color:blue;
    border-radius:50%;
    right:0px;
    top:50%;
    position:absolute;
`