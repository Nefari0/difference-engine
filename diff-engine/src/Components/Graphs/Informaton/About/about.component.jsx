import { BaseButton } from "../../KeyPad/keypad.styles";
import { DocumentContainer } from "../Help/info.styles";
import { AboutPageContainer } from "./about.styles";
import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";

const AboutPage = () => {

    const { about,setAbout } = useContext(ViewContext)

    return (
        <AboutPageContainer>
            <h1>About</h1>
            <p>
                text
            </p>
            <BaseButton
                onClick={() => setAbout(!about)}
                style={{
                    bottom:'10px',
                    right:'10px'
                }}
            >close</BaseButton>
        </AboutPageContainer>
    )
}

export default AboutPage