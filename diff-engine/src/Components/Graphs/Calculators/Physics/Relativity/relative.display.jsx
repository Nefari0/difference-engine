import { useCallback, useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { RelativityContainer } from "./relative.styles";
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

    // useEffect(() => {setState({...state,displayInput:false})},[])
    useCallback(() => {setState({...state,displayInput:false})},[state,setState])

    const timeDilation = (parseFloat(timeInterval))/(Math.sqrt(1-((parseFloat(observerVelocity)**2)/(parseFloat(c)**2))))
    // const timeDilation = (parseFloat(timeInterval))/(Math.sqrt(1-((parseFloat(observerVelocity))/(parseFloat(c)))))
    const numerator = (timeInterval.length === 0 ? '\\Delta(t)' : timeInterval)
    const denominator = `\\sqrt{1- \\frac{${observerVelocity.length === 0 ? 'v' : observerVelocity}^2}{c^2}}`
    const displayEquation = `\\frac{${numerator}}{${denominator}} ${isNumber(timeDilation.toString().substring(0,5))}`

    return(
        <RelativityContainer darkmode={darkmode}>

            <InlineMath math={`c = ${c + timeDilationSpeed}`} />

            {observerVelocity < c ? 
                <BlockMath math={displayEquation} />
                : 
                'oberserver must be slower than the speed of light'
            }

        </RelativityContainer>
    )
}

export default RelativePhysicsDisplay