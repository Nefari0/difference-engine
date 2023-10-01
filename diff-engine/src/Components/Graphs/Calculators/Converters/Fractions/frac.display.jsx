import { useContext,useEffect } from "react";
// import { ViewContext } from "../../../Context/view.context";
import { ViewContext } from "../../../../Context/view.context";

// import { FracDisplay } from "./frac.styles"
import { FracDisplay } from './frac.styles'

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
{/* <InlineMath math={frac} /> */}


const FractionCalc = (props) => {

    const { state,input } = props
    const { mathFunc } = state

    const { darkmode,setScrollBar } = useContext(ViewContext)
    
    // const decimal = input
    const decimal = input
    const numerator = Math.round((decimal*100)) // Working model 
    const zero = () => {return (isNaN(numerator) ? 0 : numerator)}
    const fraction = reduce(zero(),100)
    // console.log(numerator)
    // console.log(fraction)
    const frac = `\\frac{${fraction[0]} }{${fraction[1]}}` 

    useEffect(() => {setScrollBar(false)},[])

    function reduce(number,denomin){
        var gcd = function gcd(a,b){
          return b ? gcd(b, a%b) : a;
        };
        gcd = gcd(number,denomin);
        return [number/gcd, denomin/gcd];
      }

    return (
        <FracDisplay darkmode={darkmode}>
            <h1>Decimal to Fraction</h1>
            <p><InlineMath math={mathFunc + `\\approx` + frac} /></p>
        </FracDisplay>
    )
}

export default FractionCalc