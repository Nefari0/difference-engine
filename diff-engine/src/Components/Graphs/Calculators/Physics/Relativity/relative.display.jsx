import { useCallback, useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { 
    MovingLength,
    RelativityContainer,
    StationaryLength,
    Wedge,
    Error,
    SolutionText
 } from "./relative.styles";
import { coeffs } from "../../../coefficients";
import { BlockMath } from "react-katex";

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
    const c = (timeDilationSpeed === 'mps' ? c_2 : c_1) // Speed of light unit

    const isNumber = (param) => {return (param !== 'NaN' ? '= '+param: '')} // -- Force a numerical value

    // --- TIME DILATION --- //
    const timeDilation = (parseFloat(timeInterval))/(Math.sqrt(1-((parseFloat(observerVelocity)**2)/(parseFloat(c)**2))))
    const numerator = (timeInterval.length === 0 ? '\\Delta(t)' : timeInterval+'\\text{ s}')
    const denominator = `\\sqrt{1- \\frac{${observerVelocity.length === 0 ? 'v' : observerVelocity}^2}{c^2}}`
    const timeDilationEquation = `\\frac{${numerator}}{${denominator})}`

    // --- LENGTH CONTRACTION --- //
    const L = 1 // Stationary object length
    const lengthContraction = L*Math.sqrt(1-(parseFloat(observerVelocity)**2)/parseFloat(c)**2) // Moving object length
    const lengthContractionEquation = `L = L_0\\sqrt{1- \\frac{${observerVelocity.length === 0 ? 'v' : observerVelocity}^2}{c^2}}`
    
    useCallback(() => {setState({...state,displayInput:false})},[state,setState])

    return(
        <RelativityContainer darkmode={darkmode}>

            <h1 style={{backgroundColor:'',margin:'0px',textAlign:'center'}}>Special relativity</h1>

            {/* TIME DILATION */}
            <strong style={{position:'relative'}}>Time Dilation:</strong>

            {observerVelocity < c ? 
            <>
                <BlockMath math={timeDilationEquation} />
                {!isNaN(timeDilation) && <SolutionText>{isNumber(timeDilation.toString())+' s'}</SolutionText>}
            </>
            : 
            <Error>observer must be slower than the speed of light</Error>
            }

            {/* LENGTH CONTRACTION */}
            <strong style={{position:'relative'}}>Length Contraction:</strong>

            <BlockMath math={lengthContractionEquation} />
            {!isNaN(lengthContraction) && <SolutionText>{isNumber(lengthContraction.toString())+' s'}</SolutionText>}

            <StationaryLength L={L}>
                <p>stationary object length</p>
                <Wedge darkmode={darkmode}/>   
                <i>{L.toString().substring(0,5)*100+'%'}</i>
            </StationaryLength>

            <MovingLength
                lengthContraction={lengthContraction}
                darkmode={darkmode}
            >
                <p>moving object length</p>
                <Wedge darkmode={darkmode}/>
                <i>{(!isNaN(lengthContraction) ? lengthContraction.toString().substring(0,5) : L)*100+'%'}</i>
            </MovingLength>

        </RelativityContainer>
    )
}

export default RelativePhysicsDisplay