import { KeyBox,BaseButton,LargeButton } from "./keypad.styles";
import { MathComponent } from "mathjax-react";

const KeyPad = (props) => {

    const {
        execute,
        linearVector,
        polarVector,
        formatFunction,
        state,
        changeView
    } = props

    const { mathFunc } = state 

    return (
        <KeyBox>

            {/* <BaseButton onClick={(e) => execute(e,'mathFunc','x^2')}><MathComponent tex={String.raw`${formatFunction('x^2')}`} /></BaseButton> */}
            {/* <BaseButton onClick={(e) => execute(e,'mathFunc','x^3')}><MathComponent tex={String.raw`${formatFunction('x^3')}`} /></BaseButton> */}

            <BaseButton
                style={{position:'absolute',right:'10px'}} 
                onClick={(e) => execute(e,'currentView','gaus')}
            >
                Gaussian
            </BaseButton>

            <BaseButton style={{position:'absolute',right:'100px'}} onClick={(e) => execute(e,'currentView','unit_circle')}>Angle</BaseButton>

            <LargeButton
                style={{left:'0px'}}
                onClick={() => linearVector(mathFunc)}
            >
                Cartesian
            </LargeButton>

            <LargeButton
                style={{left:'120px'}}
                onClick={() => polarVector(mathFunc)}
            >
                Polar
            </LargeButton>

        </KeyBox>
    )
}

export default KeyPad