import { useState } from "react";
// import { Fulcrum } from "../leverage.styles";
import { Fulcrum,Axis,LeverBarContainer } from "./display.styles";
import { upArrow } from "../../../../SVG";

const LeverBar = (props) => {

    const { state } = props
    const { d_e,leverTotalLength } = state
    const totalPercentage = Math.abs(parseFloat((leverTotalLength)) / 100)
    const fulcrumDistance = Math.abs(parseFloat(d_e / totalPercentage))

    const [rotation,setRotation] = useState(-10)

    const fulcrumParameters = {
        left:`${fulcrumDistance > 100 ? '0' : fulcrumDistance}%`,
    }

    const leverBarOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${fulcrumDistance > 100 ? '0' : fulcrumDistance}% 0px`,
    }

    const axisOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${fulcrumDistance > 100 ? '0' : fulcrumDistance}% 0px`,
    }

    return (
        <LeverBarContainer style={leverBarOrigin} rotation={rotation}>
            <Axis style={axisOrigin}><i>axis</i></Axis>
            <i style={{top:'-30px',left:'90px',position:'absolute',width:'210px'}}>lever bar at {rotation} degrees</i>
            <Fulcrum style={fulcrumParameters}>
                {upArrow()}
                <i>
                    {fulcrumDistance > 100 ? 
                    `${d_e} is out of range` : 'fulcrum'}
                </i>
            </Fulcrum>
        </LeverBarContainer>
    )
}

export default LeverBar