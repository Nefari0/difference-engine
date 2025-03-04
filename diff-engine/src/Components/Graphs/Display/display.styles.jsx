import styled, { css } from "styled-components"
import { backgroundColors,viewPortSize } from "../../../global.styles"

const {
    dark,
    paper,
    light,
} = backgroundColors

const scrollingOn = css`
    overflow:scroll;
`

const scrollSnapOn = css`
    scroll-snap-type: both mandatory;
`

const hideScrollBar = css`
    ::-webkit-scrollbar {
        display:none;
    }
    pointer-events: none;
    overflow:hidden;
    ${scrollSnapOn}
`

export const ViewPort = styled.div`
    position: absolute;
    opacity:.8;
    height: ${viewPortSize}px;
    width: ${viewPortSize}px;
    background-color:${({darkmode}) => darkmode ? dark : paper};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    align-content: stretch;
    border: 2px solid rgba(0, 0, 0, 0.5);
    z-index: 0;
    left:5px;
    
    ${({scrollSnap}) => scrollSnap && scrollSnapOn}
    ${({scrollBar}) => !scrollBar ? hideScrollBar : scrollingOn}
`
    
export const OriginContainer = styled.div`
    width:500px;
    height:500px;
    position:absolute;
    left:395px;
    top:395px;
    z-index:1;
    scroll-snap-align: center;
    pointer-events:auto;
`

export const Row = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    z-index:0;
    width:2000px;
`
    
    export const Origin = styled.span`
    height:1px;
    width:1px;
    position: absolute;
    left: ${({polars,polarOrigin}) => (!polars ? `${(0).toString()}px` : `${polarOrigin.toString()}px`)};
    transition: all 1000ms;
    bottom:240px;
`

export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    position: relative;
    margin: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border:1px solid ${({darkmode}) => !darkmode ? dark : light};
`

export const MathFormula = styled.div`
    position:fixed;
    top:0px;
    right:40px;
    font-size:20px;
    font-weight:800;
    color:${({darkmode}) => darkmode ? '#fff' : '#555'};
`

export const ZeroMarker = styled.span`
    width:1200px;
    height:5px;
    background-color:${({color}) => color};
    position:absolute;
    top:643px;
    left:46px;
    transform:rotate(${({rotation}) => rotation && rotation}deg);
    z-index:0;
`