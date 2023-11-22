import { useCallback, useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { 
    MovingLength,
    RelativityContainer,
    StationaryLength,
    Wedge
 } from "./relative.styles";
import { coeffs } from "../../../coefficients";
import { InlineMath,BlockMath } from "react-katex";

const RelativePhysicsDisplay = ({state,setState}) => {

    
    const {
        darkmode
    } = useContext(ViewContext)
    
    const {
        timeInterval,
        observerVelocity,
        timeDilationSpeed,
    } = state

    const { c_1,c_2 } = coeffs
    const c = (timeDilationSpeed === 'mps' ? c_2 : c_1)

    const isNumber = (param) => {return (param !== 'NaN' ? '='+param: '')} // -- Force a numerical value

    // --- TIME DILATION --- //
    const timeDilation = (parseFloat(timeInterval))/(Math.sqrt(1-((parseFloat(observerVelocity)**2)/(parseFloat(c)**2))))
    const numerator = (timeInterval.length === 0 ? '\\Delta(t)' : timeInterval)
    const denominator = `\\sqrt{1- \\frac{${observerVelocity.length === 0 ? 'v' : observerVelocity}^2}{c^2}}`
    const displayEquation = `\\frac{${numerator}}{${denominator}} ${isNumber(timeDilation.toString().substring(0,5))}`

    // --- LENGTH CONTRACTION --- //
    const L = 1
    const lengthContraction = L*Math.sqrt(1-(parseFloat(observerVelocity)**2)/parseFloat(c)**2) 
    
    useCallback(() => {setState({...state,displayInput:false})},[state,setState])

    return(
        <RelativityContainer darkmode={darkmode}>

            <h1 style={{backgroundColor:'',margin:'0px'}}>Special relativity</h1>

            {/* <InlineMath math={`c = ${c + timeDilationSpeed}`} /> */}
            <strong style={{position:'relative'}}>Time Dilation:</strong>

            {observerVelocity < c ? 
                <BlockMath math={displayEquation} />
                : 
                'oberserver must be slower than the speed of light'
            }

            <strong style={{position:'relative'}}>Length Contraction:</strong>

            <StationaryLength L={L}>
                <p>stationary object length</p>
                <Wedge darkmode={darkmode}>
                </Wedge>    
                <i>{L.toString().substring(0,5)}</i>
            </StationaryLength>
            <MovingLength
                lengthContraction={lengthContraction}
                darkmode={darkmode}
            >
                <p>moving object length </p>    
                <Wedge darkmode={darkmode}>
                </Wedge>
                <i>{!isNaN(lengthContraction) ? lengthContraction.toString().substring(0,5) : L}</i>
            </MovingLength>

        </RelativityContainer>
    )
}

export default RelativePhysicsDisplay