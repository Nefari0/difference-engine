import styled from "styled-components";

export const ParabOrigin = styled.div`
    position:absolute;
    left:120px;
    bottom:10px;
    height:10px;
    width:10px;
`

export const ParabLegend = styled.div`
    position:absolute;
    left:-200px;
    top:-200px;
    width:150px;
    height:100px;
    background-color:#fff;
    z-index:1;
    border: solid 1px;
    border-radius:5px;

    ul {
        padding-left:10px;
        li {
            position:relative;
            width:10px;
            margin:10px;
            height:10px;
            list-style:none;

            span {
                position:absolute;
                width:10px;
                height:10px;
            }

            i {
                position:absolute;
                top:-10px;
                left:40px;
            }
        }
    }
`