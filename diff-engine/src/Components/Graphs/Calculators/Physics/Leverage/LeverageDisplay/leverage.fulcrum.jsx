import { 
    Fulcrum,
    Axis,
    LeverBarContainer,
    LeverBarText,
    FulcrumText,
    widthOfLeverBar
} from "./display.styles";

import Triangle from "./Fulcrum/triangle";

const LeverBar = (props) => {

    const { state,fulcrumDistance,rotation } = props
    const { d_e } = state
    const checkBoundary = fulcrumDistance >= 100 || isNaN(fulcrumDistance) === true || d_e === ''

    var nRotation = parseFloat(rotation)*-1
    const radValue = nRotation * (3.1415926/180) // Convert to Radians

    // Input side
    const hypotenuse_1 = (fulcrumDistance/100)*widthOfLeverBar
    const b_1 = hypotenuse_1*Math.cos(radValue)
    const a_1 = Math.sqrt(hypotenuse_1**2 -b_1**2)

    // Output side


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
        <LeverBarContainer 
            style={leverBarOrigin} 
            rotation={rotation} 
        >

            <Axis style={axisOrigin}>
                <i>axis</i>
                <div 
                    style={{
                        height:`${a_1}px`,
                        width:'2px',
                        backgroundColor:'blue',
                        transition:'all 1000ms'
                    }}
                >
                </div>
            </Axis>

            <LeverBarText>
                lever bar at {rotation} degrees
            </LeverBarText>


            <Fulcrum style={fulcrumParameters} condition={checkBoundary}>

                <Triangle 
                    rotation={rotation} 
                    condition={checkBoundary}
                />

                <FulcrumText condition={checkBoundary} >
                    {checkBoundary ?
                    `out of range or invalid parameter` : 'Fulcrum'}
                </FulcrumText>
            </Fulcrum>

        </LeverBarContainer>
    )
}

export default LeverBar