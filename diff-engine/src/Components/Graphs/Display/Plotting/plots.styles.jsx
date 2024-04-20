import styled, { css } from "styled-components";
import { basicDark,basicLight } from "../../../../global.styles";

const expansion = css`
${({darkmode}) => darkmode ? basicDark : basicLight}
    transform:translate(-30px);
    height:50px;
    width:50px;
    font-size:10px;
    border:solid 1px;
    z-index:2;
    transition:all 500ms;
    border-radius: 20px 0px 20px 20px;
    display:flex;
    align-content:center;
    align-items:center;
`

// ${({selected,indexVal}) => selected===indexVal && console.log(selected===indexVal)}
const largeDimensions = css`
    height:3px;
    width:3px;

    p {
        width:30px;
        height:20px;
        transition:all 1000ms;
        cursor: pointer;
        ${({selected,indexVal}) => selected===indexVal && expansion}
    }
`

const normalDimensions = css`
    height:3px;
    width:3px;
`

export const CoordinatePair = styled.div`
    ${({showPlotValues}) => showPlotValues ? largeDimensions : normalDimensions}
    border-radius:50%;
    text-align:center;
    z-index:0;

    p {z-index:1;}
        
`