import styled, { css } from "styled-components";

import { AlertContainer } from "../Alert/alert.styles";
import { backgroundColors } from "../../../../global.styles";

const {
    light,paper,midLight,darkLight,
    lightDark,midDark,dark
} = backgroundColors

// const containerLight = css`
//     background-color:${midDark};
//     color:#fff;
// `

// const containerDark = css`
//     background-color:${paper};
// `

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