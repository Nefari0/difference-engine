import { useContext,useState } from "react";
import { ViewContext } from "../../../../../Context/view.context";
import { 
    LeverageDisplayContainer,
    InputForceValue,
    OutputForceValue,
    TotalLength,
} from "../LeverageDisplay/display.styles";

import LeverBar from "./leverage.fulcrum";

import CustomMath from "../../../../KeyPad/CostomMath";

const LeverageDisplay = (props) => {
    const { state } = props
    const { F_e,d_e,leverTotalLength} = state
    const d_r = parseFloat(leverTotalLength-d_e).toFixed(2)
    const { darkmode } = useContext(ViewContext)
    const resistance = ((d_r/d_e) * F_e).toFixed(2)
    const totalPercentage = Math.abs(parseFloat((leverTotalLength)) / 100)
    const fulcrumDistance = Math.abs(parseFloat(d_e / totalPercentage))

    const [rotation,setRotation] = useState(-20)

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
            />

        </LeverageDisplayContainer>
    )
}

export default LeverageDisplay