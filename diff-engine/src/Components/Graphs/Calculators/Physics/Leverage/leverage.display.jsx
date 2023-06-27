import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { 
    LeverageDisplayContainer,
    LeverBar,
    Fulcrum,
    InputForceValue,
    OutputForceValue,
    TotalLength,
    D_eLength,
    D_rLength
} from "./leverage.styles";

import { 
    upArrow,
    LongLeftArrow,
    LongRightArrow
 } from "../../../SVG";

import CustomMath from "../../../KeyPad/CostomMath";

const LeverageDisplay = (props) => {
    const { state } = props
    const { F_e,d_e,d_r} = state
    const { darkmode } = useContext(ViewContext)
    const d_eNum = parseFloat(d_e)
    const d_rNum = parseFloat(d_r)
    const totalLength = parseFloat(d_rNum+d_eNum)
    const totalPercentage = parseFloat((totalLength)) / 100
    const fulcrumDistance = parseFloat(d_e / totalPercentage)

    const resistance = ((d_r/d_e) * F_e).toFixed(2)
    const fulcrumParameters = {
        left:`${fulcrumDistance}%`,
        transition: "all 1000ms",
        position:'absolute'
    }

    return (
        <LeverageDisplayContainer darkmode={darkmode}>
            <h1>Leverage</h1>
            <InputForceValue>
                <CustomMath >{`F_e = ${F_e}`}</CustomMath>
            </InputForceValue>
            <OutputForceValue>
                <CustomMath>
                    {`F_r = ${resistance}`}
                </CustomMath>
            </OutputForceValue>

            <TotalLength>
                total length = {totalLength}
            </TotalLength>
            
            <D_eLength>
                <CustomMath>{`d_e = ${d_e}`}</CustomMath>
                {LongRightArrow()}
            </D_eLength>

            <D_rLength>
                <CustomMath>{`d_r = ${d_r}`}</CustomMath>
                {LongLeftArrow()}
            </D_rLength>

            <LeverBar>
                <Fulcrum style={fulcrumParameters}>
                    {upArrow()}
                    <i>
                        fulcrum
                    </i>
                </Fulcrum>
            </LeverBar>
        </LeverageDisplayContainer>
    )
}

export default LeverageDisplay