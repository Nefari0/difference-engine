import { useContext } from "react";
import { ViewContext } from "../../../../../Context/view.context";

import { MathComponent,Node } from "mathjax-react"
import { RadianContainer } from "./rads.styles";
import {
    Fraction,
    evaluate,
    Simplify
} from "mathjs";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
// import { fraction } from "mathjs";

const RationalRads = (props) => {

    const { degrees,radians,showDegrees,radianVal,degreeVal,style } = props
    const pi = Math.PI
    const { darkmode } = useContext(ViewContext)

    // --- THESE ARE VALUES FROM UNIT CIRCLE FOR TESTING --- //
    // const angle = 3*(Math.PI/4).toFixed(2) // Should equal 2.36...
    // const angle = (2*Math.PI)/(3).toFixed(2) // Should equal 2.09...
    // const angle = (Math.PI/6) // === .52
    // const angle = (Math.PI/4) // .7853
    // const angle = (Math.PI/3)
    // const angle = 2*(pi/3)
    // const angle = 3*(pi/4)
    // const angle = 5*(pi/6)
    // const angle = pi
    // const angle = 7*(pi/6)
    // const angle = 5*(pi/4)
    // const angle = 4*(pi/3) // Cant find rationalization
    // const angle = 3*(pi/2)
    // const angle = 5*(pi/3) // Cant fint rationalization
    // const angle = 7*(pi/4)
    // const angle = 11*(pi/6) // Cant find rationalization

    // const angle = radians 
    const angle = radianVal()
    const decimal = angle/Math.PI // Working model
    const toNumerator = Math.round((decimal*100)) // Working model    
   
    const fraction = reduce(toNumerator,100)
    const rad = `\\frac{${fraction[0]}\\pi }{${fraction[1]}}` // Rendered radians

    function reduce(number,denomin){
        var gcd = function gcd(a,b){
          return b ? gcd(b, a%b) : a;
        };
        gcd = gcd(number,denomin);
        return [number/gcd, denomin/gcd];
      }

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

    const radDisplay = {
        // transform: 'scale(0.50)',
        fontSize:'20px',
        position:'absolute',
        bottom:'7px',
        left:'0px'
    }

    const degDisplay = {
        fontSize:'18px',
        position:'absolute',
        right:'0px',
        top:'20px'
    }

    return (
        <RadianContainer
            style={style}
            darkmode={darkmode}
        >

            <div style={degDisplay}>
                <InlineMath math={degreeVal()} />
                <i> deg</i>
            </div>
            
            {/* <BlockMath math={cosFormat} /> */}
            {/* <BlockMath math={sinFormat} /> */}
            {/* <BlockMath math={sinFormat+cosFormat} /> */}
            {/* <BlockMath math={bynom} /> */}
            <div style={radDisplay}><BlockMath math={rad} /></div>
        </RadianContainer>
    )
}

export default RationalRads

// const randoundingFuncton = (frac) => {
//     console.log('from rounding function',frac)
// }