import { MathComponent,Node,MathJax } from "mathjax-react"
import { RadianContainer } from "./rads.styles";
import {
    Fraction,
    evaluate
} from "mathjs";
// import { MathJax } from "mathjax-full/js/components/global";
// import { fraction } from "mathjs";

const RationalRads = ({theta}) => {
    const angle = 1.57
    // const angle = 0.79
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

    // var numerator = tens * x;
    // var denominator = tens;
    const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
    return (
        <RadianContainer>
            <h1>text</h1>
            {/* <MathComponent tex={String.raw`${Math.PI}`}/> */}
            <MathComponent tex={' pi_{n-1}'}/>
            {/* <MathJax.Node formula={inlineFormula}  /> */}
        </RadianContainer>
    )
}

export default RationalRads