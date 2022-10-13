import { KeyBox,BaseButton,LargeButton } from "./keypad.styles";
import { MathComponent } from "mathjax-react";

const KeyPad = ({execute,linearVector,polarVector}) => {

    return (
        <KeyBox>

            <BaseButton onClick={(e) => execute(e,'x^2')}><MathComponent tex={String.raw`${'x^2'.replace(/ /g, "").replace(/\*/g, '')}`} /></BaseButton>
            <BaseButton onClick={(e) => execute(e,'x^3')}><MathComponent tex={String.raw`${'2^3'.replace(/ /g, "").replace(/\*/g, '')}`} /></BaseButton>

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