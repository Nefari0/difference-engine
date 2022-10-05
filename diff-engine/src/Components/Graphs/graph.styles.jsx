import styled from "styled-components";

export const Table = styled.main`
    position: absolute;
    height: 1000px;
    width: 1000px;
    margin-top: 70px;
    margin-left:-100px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    box-shadow: 0px 5px 20px -7px #000000;
    z-index: 0;

    button {
        position:absolute;
        bottom:-200px;
        height:100px;
        width:300px;
        font-size:40px;
    }

    input {
        position:absolute;
        bottom:-80px;
        height:60px;
        // width:400px;
        width:100%;
        box-shadow: 0px 5px 20px -7px #000000;
        font-size:40px;
    }
`

export const Row = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    z-index:1;
`

export const Origin = styled.span`
    position: absolute;
    left: ${({polars}) => (!polars ? `250px` : `500px`)};
    bottom:485px;
    transition: all 1000ms;
`

export const GridCell = styled.span`
    height: 96px;
    width: 96px;
    position: relative;
    margin: 0px;
    border: 2px solid rgba(0, 0, 0, 0.05);
`