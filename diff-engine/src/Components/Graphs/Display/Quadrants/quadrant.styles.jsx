import styled, { css } from "styled-components"
import { backgroundColors } from "../../global.styles"

const {dark,light} = backgroundColors

const quad1 = css`
    border-right:solid 10px;
`

export const Quadrant = styled.section`
    height:500px;
    // height:${({height}) => height ? height : '500px'};
    width:500px;
    // background-color:blue;
    position:absolute;
    z-index:${({zIndex}) => zIndex};
    // bottom:-500px;
    // left:500px;
    // transform: scale(1,-1);
    // transform: scale(${({sectionRotation}) => sectionRotation});
    transform:rotate(${({main}) => main});
    // transform: scaleX(1);
    bottom:${({y}) => y}px;
    left:${({x}) => x}px;
    background-color:${({color}) => color};
    display:flex;
    // flex-direction: column-reverse;
    flex-direction:column;
    justify-content: flex-start;
    // align-items: flex-end;

    section {

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        align-content: stretch;
        // transform:rotate(-180deg);
        transform: scaleX(${({section}) => section});
        // background-color:blue;
        // position:absolute;
        // top:-5px;
        // padding:5px;

        span {
            // positon:relative;
            display:flex;
            // transform:rotate(${({spanRotation}) => spanRotation});
            // transform: scaleX(-1);
            transform:rotate(${({span}) => span});
            
            p {
                // margin:0px;
                // transform: scaleX(${({p}) => p});
                // transform: scaleX(${({pRotation}) => pRotation})
                // transform: scale(${({pRotation}) => pRotation})
            }
        }   
    }
    
`

export const Row = styled.section`
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-items: flex-start;
    // align-content: stretch;
    z-index:0;
    width:500px;
    height:500px;
    // background-color:orange;
    // border:solid 1px;
    // position:absolute;
    // position:relative;
    // bottom:0px;
`

export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    // position: relative;
    // position:absolute;
    // margin: 0px;
    // padding:-10px;
    // border: 1px solid rgba(0, 0, 0, 0.5);
    border:1px solid ${({darkmode}) => !darkmode ? dark : light};
`