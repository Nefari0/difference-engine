import styled, { css } from "styled-components"
import { backgroundColors } from "../../global.styles"

const {dark,light} = backgroundColors
const quad1 = css`

`

export const Quadrant = styled.section`
    // height:500px;
    height:${({height}) => height ? height : '500px'};
    width:500px;
    // background-color:blue;
    position:absolute;
    z-index:${({zIndex}) => zIndex};
    // bottom:-500px;
    // left:500px;
    
    
    // transform: scale(1,-1);
    transform: scale(${({sectionRotation}) => sectionRotation});
    bottom:${({y}) => y}px;
    left:${({x}) => x}px;
    background-color:${({color}) => color};
    display:flex;
    // align-items: flex-end;

    p {
        // transform:rotate(180deg);
        // transform: scaleY(${({scaleContent}) => scaleContent});
    }
    
    span {
        // positon:relative;
        display:flex;
        transform:rotate(${({spanRotation}) => spanRotation});
        
        p {
            margin:5px;
            // transform: scaleX(-1);
            // transform: scaleX(${({pRotation}) => pRotation})
            transform: scale(${({pRotation}) => pRotation})
        }
    }   
`


export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    position: relative;
    // position:absolute;
    margin: 0px;
    // border: 1px solid rgba(0, 0, 0, 0.5);
    border:1px solid ${({darkmode}) => !darkmode ? dark : light};
`