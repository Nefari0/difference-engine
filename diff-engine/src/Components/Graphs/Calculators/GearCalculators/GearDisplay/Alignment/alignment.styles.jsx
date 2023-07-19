import styled from "styled-components";

export const ToothAlignmentWrapper = styled.div`
    position:absolute;
    left:0px;
    height:1px;
    width:1px;
    background-color:red;
    transform:rotate(${({degrees}) => degrees}deg);
`