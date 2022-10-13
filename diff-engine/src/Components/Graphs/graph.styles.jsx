import styled from "styled-components";

export const Enclosure = styled.main`
// height:600px;
// width:600px;
// position:relative;

// background-color:blue;
    // display:flex;
    // flex-direction:column;

//     @media (max-width:620px) {
//         transform: scale(0.70);
//         left:-21%;
//         top:-21%;
//     }

// @media (max-width:400px) {
//     transform: scale(0.50);
//     left:-21%;
//     top:-31%;
// }
`

export const Table = styled.div`
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
    // overflow:hidden;

    input {
        position:absolute;
        bottom:-80px;
        height:60px;
        width:400px;
        width:100%;
        box-shadow: 0px 5px 20px -7px #000000;
        font-size:40px;
        z-index:100000000;
    }

    @media (max-width:620px) {
            transform: scale(0.70);
            left:-21%;
            top:-21%;
        }

    @media (max-width:400px) {
        transform: scale(0.50);
        left:-21%;
        top:-31%;
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

export const MathFormula = styled.div`
    position:absolute;
    top:0px;
    right:40px;
    font-size:20px;
`

export const BaseButton = styled.button`
position:relative;
    width:75px;
    height:75px;
    // background-color:blue;
    border-radius:50%;
`