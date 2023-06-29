import { useContext,useState } from "react";
import { ViewContext } from "../../../../../Context/view.context";
import { 
    LeverageDisplayContainer,
    LeverBarContainer,
    Fulcrum,
    InputForceValue,
    OutputForceValue,
    TotalLength,
    D_eLength,
    D_rLength,
    Axis
} from "../LeverageDisplay/display.styles";

import LeverBar from "./leverage.fulcrum";
// import { Wedge } from "./Fulcrum/triangle.styles";
// import Fulcrum from "./Fulcrum";

import { 
    // upArrow,
    LongLeftArrow,
    LongRightArrow
 } from "../../../../SVG";

import CustomMath from "../../../../KeyPad/CostomMath";

const LeverageDisplay = (props) => {
    const { state } = props
    const { F_e,d_e,leverTotalLength} = state
    const d_r = parseFloat(leverTotalLength-d_e).toFixed(2)
    const { darkmode } = useContext(ViewContext)
    const d_eNum = Math.abs(parseFloat(d_e))
    const d_rNum = Math.abs(parseFloat(d_r))
    const totalLength = Math.abs(parseFloat(d_rNum+d_eNum))
    const resistance = ((d_r/d_e) * F_e).toFixed(2)

    const totalPercentage = Math.abs(parseFloat((leverTotalLength)) / 100)
    const fulcrumDistance = Math.abs(parseFloat(d_e / totalPercentage))

    const validate = (value) => { // Verifies values are numbers and within range
        if(isNaN(value) === true) {
            return ('0')
        }

        if (fulcrumDistance >= 100) {
            return ('0')
        } else {return value}
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

            <TotalLength>
                total length = {totalLength}
            </TotalLength>
            
            <D_eLength>
                <CustomMath>{`d_e = ${validate(d_e)}`}</CustomMath>
                {LongRightArrow()}
            </D_eLength>

            <D_rLength>
                <CustomMath>{`d_r = ${validate(d_r)}`}</CustomMath>
                {LongLeftArrow()}
            </D_rLength>

            {/* DISPLAY ANGLE GRAPH (FULCRUM) */}
            <LeverBar
                fulcrumDistance={fulcrumDistance}
                state={state}
            />

        </LeverageDisplayContainer>
    )
}

export default LeverageDisplay