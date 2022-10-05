import styled from "styled-components";

export const Table = styled.main`
    position: absolute;
    height: 500px;
    width: 500px;
    margin:auto;
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
        width:150px;
        font-size:20px;
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

    @media (max-width:620px) {
            transform: scale(0.70);
            left:-21%;
            top:-21%;
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
    left: ${({polars}) => (!polars ? `125px` : `250px`)};
    bottom:233px;
    transition: all 1000ms;
`

export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    position: relative;
    margin: 0px;
    border: 1px solid rgba(0, 0, 0, 0.05);
`