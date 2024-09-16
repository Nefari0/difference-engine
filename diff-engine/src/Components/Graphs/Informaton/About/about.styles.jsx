import styled from "styled-components";
import { DocumentContainer } from "../Help/info.styles";
import { basicDark,basicLight } from "../../../../global.styles";

export const AboutPageContainer = styled(DocumentContainer)`
    ${({darkmode}) => darkmode ? basicDark : basicLight}
    p {
        font-weight:600;
        padding:20px;
    }
    
    a {
        color:blue;
    }

    h1 {
        
    }
`
