import { KeyBox,BaseButton,LargeButton,CloseHelp } from "./keypad.styles";
import { CalculatorIcon } from "../SVG";

// --- kaytex --- //
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
{/* <InlineMath math={frac} /> */}
const frac = `\\frac{${'string1'}\\pi }{${'string2'}}` 

const KeyPad = (props) => {

    const {
        execute,
        linearVector,
        polarVector,
        formatFunction,
        state,
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

            <BaseButton
                style={{position:'absolute',right:'100px'}}
                onClick={(e) => execute(e,'currentView','unit_circle')}
            >
                <InlineMath math={`\\phase{-78^\\circ}`} />
            </BaseButton>

            {/* FRACTIONS */}
            <BaseButton
                style={{position:'absolute',right:'100px',top:'85px',fontSize:'30px'}}
                onClick={(e) => execute(e,'currentView','fracs')}
            >
                
                <InlineMath math={`\\frac{${'a'} }{${'b'}}`} />
            </BaseButton>

            <BaseButton
                style={{right:'190px'}}
                onClick={(e) => execute(e,'currentView','standard')}
            >
                {CalculatorIcon()}
            </BaseButton>

            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'10px',top:'85px'}}
            >
                <strong>?</strong>
            </CloseHelp>

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