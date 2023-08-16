import styled, { css } from "styled-components";

// const playerWidth='298px'
// const playerHeight='191px'

// height:${playerHeight}px;
// width:${playerWidth}px;
export const PlayerContainer = styled.div`
    // background-color:blue;
    z-index:100000000;
    // margin:auto;
    // position:fixed;
    position:absolute;
    // bottom:0px;
    width:100%;
    height:50%;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`

export const PlayerHeader = styled.header`
    // background-color:yellow;
    height:50px;
    margin:0px;
    // opacity:.4;
    // background-color:#000;
    background-color:rgba(0, 0, 0, .4);
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: center;
	align-content: center;

    button {
        transform:scale(.6);
        position:relative;
        margin:-13px;
    }
`