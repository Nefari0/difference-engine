import { useContext } from "react";
import { ViewContext } from "../../../../../Context/view.context";
import { 
    LeverageDisplayContainer,
    InputForceValue,
    OutputForceValue,
    TotalLength,
    widthOfLeverBar,
    DistanceExchangeDisplay
} from "../LeverageDisplay/display.styles";

import LeverBar from "./leverage.fulcrum";
import HeightArrow from "./HeightArrow/height-arrow.component";
import CustomMath from "../../../../KeyPad/CostomMath";

const LeverageDisplay = (props) => {
    const { state } = props
    const { F_e,d_e,leverTotalLength,leverRotation} = state
    const d_r = parseFloat(leverTotalLength-d_e).toFixed(2)
    const { darkmode } = useContext(ViewContext)
    const resistance = ((d_r/d_e) * F_e).toFixed(2)
    const totalPercentage = Math.abs(parseFloat((leverTotalLength)) / 100)
    const fulcrumDistance = Math.abs(parseFloat(d_e / totalPercentage))

    const rotation = leverRotation

    // --- TRAVEL DISTANCES --- //
    var nRotation = parseFloat(rotation)*-1
    const radValue = nRotation * (3.1415926/180) // Convert to Radians
    // Input side

    const hypotenuse_1 = (fulcrumDistance/100)*widthOfLeverBar
    const b_1 = hypotenuse_1*Math.cos(radValue)
    const a_1 = Math.sqrt(hypotenuse_1**2 -b_1**2)

    // Output side
    const hypotenuse_2 = widthOfLeverBar-hypotenuse_1
    const b_2 = hypotenuse_2*Math.cos(radValue)
    const a_2 = Math.sqrt(hypotenuse_2**2 -b_2**2)
    
    // Output distance exchange
    const distanceExchange = a_2/(a_1/100)

    const validate = (value) => { // Verifies values are numbers and within range
        var error = false
        const valueArr = value.split('')
        if(isNaN(value) === true || value === '' || fulcrumDistance >= 100 || (valueArr[0] === '0' && valueArr[1] != '.')) {
            error = true
        } 
        return (error ? 'invalid' : value)
    }

    return (

        <LeverageDisplayContainer darkmode={darkmode}>

            <h1>Force/Distance Multipliers</h1>

            <InputForceValue>
                <CustomMath >{`F_e = ${isNaN(F_e) ? '0':F_e}`}</CustomMath>
            </InputForceValue>

            <OutputForceValue>
                <CustomMath>
                    {`F_r = ${isNaN(resistance) ? '0' : resistance}`}
                </CustomMath>
            </OutputForceValue>

            <TotalLength condition={validate(leverTotalLength) === 'invalid'}>
                total length = {leverTotalLength === "" ? 'Invalid value' : leverTotalLength}
            </TotalLength>


            {/* DISPLAY ANGLE GRAPH (FULCRUM) */}
            <LeverBar
                validate={validate}
                rotation={rotation}
                fulcrumDistance={fulcrumDistance}
                state={state}
                d_r={d_r}
                a_1={a_1}
                a_2={a_2}
                nRotation={nRotation}
            />

            {fulcrumDistance < 100 && 
            <DistanceExchangeDisplay rotation={rotation} a_2={a_2}>
                <i>travel distance = {distanceExchange.toFixed(1)} %</i>
                <HeightArrow/>
            </DistanceExchangeDisplay>}

        </LeverageDisplayContainer>
    )
}

export default LeverageDisplay