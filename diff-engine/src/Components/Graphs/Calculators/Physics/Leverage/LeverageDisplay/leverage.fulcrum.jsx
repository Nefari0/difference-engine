import { useState } from "react";
// import { Fulcrum } from "../leverage.styles";
import { 
    Fulcrum,
    Axis,
    LeverBarContainer,
    LeverBarText,
    FulcrumText
} from "./display.styles";

// import { upArrow } from "../../../../SVG";
import Triangle from "./Fulcrum/triangle";

const LeverBar = (props) => {

    const { state,fulcrumDistance } = props
    const { d_e } = state
    const checkBoundary = fulcrumDistance >= 100 || isNaN(fulcrumDistance) === true || d_e === ''
    const [rotation,setRotation] = useState(-10)

    const fulcrumParameters = {
        left:`${checkBoundary ? '0' : fulcrumDistance}%`,
    }

    const leverBarOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${checkBoundary ? '0' : fulcrumDistance}% 0px`,
    }

    const axisOrigin = { // This is for dispaying rotational distances
        transformOrigin: `${checkBoundary ? '0' : fulcrumDistance}% 0px`,
        transform:`rotate(${-rotation}deg)`
    }

    return (
        <LeverBarContainer style={leverBarOrigin} rotation={rotation}>

            <Axis style={axisOrigin}><i>axis</i></Axis>

            <LeverBarText>
                lever bar at {rotation} degrees
            </LeverBarText>

            <Fulcrum style={fulcrumParameters} condition={checkBoundary}>

                {/* {upArrow()} */}
                <Triangle 
                    rotation={rotation} 
                    condition={checkBoundary}
                />

                <FulcrumText condition={checkBoundary} >
                    {checkBoundary ?
                    `out of range or invalid input` : 'Fulcrum'}
                </FulcrumText>
            </Fulcrum>

        </LeverBarContainer>
    )
}

export default LeverBar