import styled from "styled-components";

export const PlayerContainer = styled.section`
    z-index:100000000;
    position:absolute;
    width:100%;
    height:50%;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`

export const PlayerHeader = styled.header`
    height:50px;
    margin:0px;
    background-color:rgba(0, 0, 0, .4);
    display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;

    button {
        transform:scale(.6);
        position:relative;
        margin:-13px;
    }

    h2 {
        color:#fff;
        font-weight:200;
        width:90%;
    }
`

export const VideoPlaceholder = styled.div`
    background-color:rgba(0, 0, 0, .4);

    h1 {
        color:#fff;
    }
`