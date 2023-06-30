import { useContext,useState } from "react";
import { ViewContext } from "../../../../../Context/view.context";
import { 
    LeverageDisplayContainer,
    // LeverBarContainer,
    // Fulcrum,
    InputForceValue,
    OutputForceValue,
    TotalLength,
    D_eLength,
    D_rLength,
    // Axis
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
    const resistance = ((d_r/d_e) * F_e).toFixed(2)
    const totalPercentage = Math.abs(parseFloat((leverTotalLength)) / 100)
    const fulcrumDistance = Math.abs(parseFloat(d_e / totalPercentage))
    const [rotation,setRotation] = useState(-20)

    const validate = (value) => { // Verifies values are numbers and within range
        var error = false
        if(isNaN(value) === true || value === '' || fulcrumDistance >= 100 || value.split('')[0] === '0') {
            error = true
        } 
        return (error ? 'invalid' : value)
    }

    // const validate = (value) => { // Verifies values are numbers and within range
    //     var error = false
    //     // if(isNaN(value) === true || value === '' || fulcrumDistance >= 100 || value.split('')[0] === '0') {
    //     //     error = true
    //     // } 

    //     switch (value) {
    //         case isNaN(value) === true:
    //             error = true
    //             break
    //         case value === '':
    //             error = true
    //             break
    //         case fulcrumDistance >= 100:
    //             error = true
    //             break
    //         case value.split('')[0] === '0':
    //             error = true
    //             break
    //         default:return
    //     }
    //     console.log(error)
    //     // return (error ? 'invalid' : value)
    // }

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

            {/* <TotalLength condition={leverTotalLength === ""}> */}
            <TotalLength condition={validate(leverTotalLength) === 'invalid'}>
                total length = {leverTotalLength === "" ? 'Invalid value' : leverTotalLength}
            </TotalLength>
            
            <D_eLength condition={validate(d_e) === 'invalid'}>
                <CustomMath>{`d_e = ${validate(d_e)}`}</CustomMath>
                {LongRightArrow()}
            </D_eLength>

            <D_rLength>
                <CustomMath>{`d_r = ${validate(d_r)}`}</CustomMath>
                {LongLeftArrow()}
            </D_rLength>

            {/* DISPLAY ANGLE GRAPH (FULCRUM) */}
            <LeverBar
                rotation={rotation}
                fulcrumDistance={fulcrumDistance}
                state={state}
            />

        </LeverageDisplayContainer>
    )
}

export default LeverageDisplay