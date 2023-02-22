import styled, { css } from "styled-components";

import { AlertContainer } from "../Alert/alert.styles";

const hidden = css`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 4s, opacity 4s linear;
    pointer-events:none;
`

export const NoticeContainer = styled(AlertContainer)`
    border-radius:10px;
    display:flex;

    strong {
        margin:auto;
    }
    
    ${({noticeContent}) => !noticeContent && hidden}
`