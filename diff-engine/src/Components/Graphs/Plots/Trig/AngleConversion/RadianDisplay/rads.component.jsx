import { MathComponent,Node } from "mathjax-react"
import { RadianContainer } from "./rads.styles";
import {
    Fraction,
    evaluate
} from "mathjs";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
// import { fraction } from "mathjs";

const RationalRads = ({theta}) => {
    const angle = 1.57
    const num = angle*100
    const den = 100

    const getPi = () => {
        // is radian less than pi
        const pi = Math.PI
        const size = angle/pi
        const decimals = size.toFixed(2)
        // const frac = new Fraction(angle,100)
        // console.log(evaluate(toString(pi)))

        // convert to fraction
        // gcd(num,den)
    }
    // var gcd = function(a, b) {
    //     console.log('hit gcd',a,b)
    //     if (!b) {
    //         console.log('is b',a)
    //         return a
    //     };
        
        // console.log((b, a % b))
        // return gcd(b, a % b);
    // };
    getPi()

    // var x = 34/35;
    // var a = x - x.toFixed();
    // var tens = (10).pow(a.toString().length - 2);

    // --- ORIGINAL --- //
    // const inlineFormula = '\\pi\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta';
    // const blockFormula = `\\frac{\\pi n!}{k!(n-k)!} = \\binom{n}{k}`;
    // --------------- //

    // ----PROTOTYPING RADIAN FORMAT----//
    const piFormat = `\\frac{\\pi}{2}`
    const cosFormat = `\\frac{\\sqrt{3}}{2}`
    const sinFormat = '\\frac{-1}{2}'
    const bynom = `\\binom{n}{k}`
    const pair = `\\left(${sinFormat},${cosFormat}\\right)`
    // ---------------------------------//

    const blockStyle = {
        // transform: 'scale(0.50)',
        fontSize:'10px',

    }

    return (
        <RadianContainer>
            {/* <InlineMath math={cosFormat} /> */}
            {/* <BlockMath math={cosFormat} /> */}
            {/* <BlockMath math={sinFormat} /> */}
            {/* <BlockMath math={sinFormat+cosFormat} /> */}
            {/* <BlockMath math={bynom} /> */}
            <div style={blockStyle}><BlockMath math={pair} /></div>
        </RadianContainer>
    )
}

export default RationalRads