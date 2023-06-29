import { useState } from "react";
// import { Fulcrum } from "../leverage.styles";
import { Fulcrum,Axis,LeverBarContainer,LeverBarText } from "./display.styles";
import { upArrow } from "../../../../SVG";

const LeverBar = (props) => {

    const { state,fulcrumDistance } = props
    const { d_e } = state
    const checkBoundary = fulcrumDistance >= 100 || isNaN(fulcrumDistance) === true
    const [rotation,setRotation] = useState(-10)

    const fulcrumParameters = {
        left:`${checkBoundary ? '0' : fulcrumDistance}%`,
    }

    const leverBarOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${checkBoundary ? '0' : fulcrumDistance}% 0px`,
    }

    const axisOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${checkBoundary ? '0' : fulcrumDistance}% 0px`,
    }

    return (
        <LeverBarContainer style={leverBarOrigin} rotation={rotation}>
            
            <Axis style={axisOrigin}><i>axis</i></Axis>

            <LeverBarText>
                lever bar at {rotation} degrees
            </LeverBarText>

            <Fulcrum style={fulcrumParameters} condition={checkBoundary}>

                {upArrow()}

                <i >
                    {checkBoundary && !isNaN(d_e) ? 
                    `${d_e} is out of range` : 
                    (isNaN(d_e) ? 'invalid input' : 'fulcrum')}
                </i>
            </Fulcrum>

        </LeverBarContainer>
    )
}

export default LeverBar