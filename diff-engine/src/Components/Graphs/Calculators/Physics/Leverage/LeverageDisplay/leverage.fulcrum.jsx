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
        transition: "all 1000ms",
        position:'absolute',
    }

    const leverBarOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${fulcrumDistance > 100 ? '0' : fulcrumDistance}% 0px`,
        transform:`rotate(${rotation}deg)`,
        transition: "all 1000ms",
    }

    const axisOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${fulcrumDistance > 100 ? '0' : fulcrumDistance}% 0px`,
        transition: "all 1000ms",
        top:'-5px'
    }

    return (
        <LeverBarContainer style={leverBarOrigin} rotation={rotation}>
            <Axis style={axisOrigin}><i>axis</i></Axis>
            <i style={{top:'-30px',left:'90px',position:'absolute',width:'210px'}}>lever bar at {rotation} degrees</i>
            <Fulcrum style={fulcrumParameters}>
                {upArrow()}
                <i>
                    {fulcrumDistance > 100 ? `${d_e} is out of range` : 'fulcrum'}
                </i>
            </Fulcrum>
        </LeverBarContainer>
    )
}

export default LeverBar