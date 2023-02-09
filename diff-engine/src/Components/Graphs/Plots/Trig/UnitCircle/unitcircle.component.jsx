import { useContext } from "react"
import { ViewContext } from "../../../../Context/view.context"

import { AngleLine } from "./unitcircle.styles"
import { ThetaOrigin } from "../AngleConversion/display.styles"
import { Degrees,Radiis,SinCosCoords } from "./unitcircle.styles"
import { MathComponent } from "mathjax-react"

// --- kaytex --- //
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
{/* <InlineMath math={frac} /> */}
// const frac = `\\frac{${'string1'}\\pi }{${'string2'}}` 

const Rotations = ({items}) => {

    
    const { degrees,radians,sin,cos } = items

    const tOrigin = {
        top:'200px',
        left:'200px',
        backgroundColor:'blue',
        transform: `rotate(${-parseInt(degrees)}deg)`
    }

    const { darkmode } = useContext(ViewContext)

    // for testing 
    const piFormat = `\\frac{\\pi}{2}`
    const cosFormat = `\\frac{\\sqrt{3}}{2}`
    const sinFormat = '\\frac{-1}{2}'
    const bynom = `\\binom{n}{k}`
    // ----- //

    const rads = `\\frac{${radians[0]}\\pi }{${radians[1]}}` 
    const degs = `${degrees}^\\circ`
    const pair = `\\left(${sin},${cos}\\right)`


    return (
            <ThetaOrigin style={tOrigin}>
                <AngleLine darkmode={darkmode} >
                    {/* <Degrees degrees={degrees}>{degrees}deg</Degrees> */}

                    <Degrees
                        darkmode={darkmode}
                        degrees={degrees}
                    >
                        <InlineMath math={degs} />
                    </Degrees>

                    <Radiis
                        degrees={degrees}
                        darkmode={darkmode}
                    >
                        <InlineMath math={rads} />
                    </Radiis>
                    <SinCosCoords degrees={degrees}>
                    {/* <InlineMath math={rads} /> */}
                    <InlineMath math={pair} />
                    </SinCosCoords>
                </AngleLine>
            </ThetaOrigin>

    )
}

export default Rotations