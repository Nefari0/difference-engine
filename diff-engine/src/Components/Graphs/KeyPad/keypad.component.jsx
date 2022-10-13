import { KeyBox,BaseButton,LargeButton } from "./keypad.styles";
import { MathComponent } from "mathjax-react";
// import { format } from "mathjs";

const KeyPad = ({execute,linearVector,polarVector,formatFunction}) => {

    return (
        <KeyBox>

            <BaseButton onClick={(e) => execute(e,'x^2')}><MathComponent tex={String.raw`${formatFunction('x^2')}`} /></BaseButton>
            <BaseButton onClick={(e) => execute(e,'x^3')}><MathComponent tex={String.raw`${formatFunction('x^3')}`} /></BaseButton>

            <LargeButton
                style={{left:'0px'}}
                onClick={linearVector}
            >
                Cartesian
            </LargeButton>

            <LargeButton
                style={{right:'0px'}}
                onClick={polarVector}
            >
                Polar
            </LargeButton>

        </KeyBox>
    )
}

export default KeyPad