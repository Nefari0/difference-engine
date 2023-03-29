import { BaseButton } from "../../KeyPad/keypad.styles";
import Button from "../../KeyPad/Button";
import { DocumentContainer } from "../Help/info.styles";
import { AboutPageContainer } from "./about.styles";
import { ViewContext } from "../../../Context/view.context";
import { useContext } from "react";

const aboutText = 'A simple calculator for graphing and standard arithmetic operations. This app uses mathjs to execute calculations on typed input'+
'\n(strings). It also uses mathjax and katex to render human-readable equations and formulas in the browser. This is a progressive web app'+
'\nthat can be downloaded onto any device for offline use.'+
'\n' +
'\nThe title (The Difference Engine) is inspired by the mechanical calculator designed in the 1820s and created by Charles Babbage'
// '\n(https://en.wikipedia.org/wiki/Difference_engine).'

const AboutPage = () => {

    const { about,setAbout,darkmode } = useContext(ViewContext)

    return (
        <AboutPageContainer darkmode={darkmode}>
            <h1>About</h1>
            <p>
                {aboutText}
            </p>

            <a
                href="https://en.wikipedia.org/wiki/Difference_engine"
                target='_blank'
            >
                (Learn more)
            </a>

            <Button
                style={{bottom:'10px',right:'10px'}}
                onClick={() => setAbout(!about)}                
                text={'close'}
                buttonClass={'base'}
            />
            
        </AboutPageContainer>
    )
}

export default AboutPage