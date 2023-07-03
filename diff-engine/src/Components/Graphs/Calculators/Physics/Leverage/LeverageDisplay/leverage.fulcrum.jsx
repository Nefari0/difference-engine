import { useContext } from "react";
import { ViewContext } from "../../../../../Context/view.context";
import { 
    Fulcrum,
    Axis,
    LeverBarContainer,
    LeverBarText,
    FulcrumText,
    widthOfLeverBar,
    DistanceExchangeDisplay
} from "./display.styles";

import Triangle from "./Fulcrum/triangle";
import CustomMath from "../../../../KeyPad/CostomMath";
import Button from "../../../../KeyPad/Button";

const LeverBar = (props) => {

    const {
        d_r,
        state,
        fulcrumDistance,
        rotation,
        validate,
        a_1,a_2,nRotation
    } = props
    const { darkmode,setDisplayKeymap } = useContext(ViewContext)
    const { d_e } = state
    const checkBoundary = fulcrumDistance >= 100 || isNaN(fulcrumDistance) === true || d_e === ''

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
                {fulcrumDistance < 100 &&
                <span
                    style={{
                        position:'absolute',
                        height:`${a_1}px`,
                        width:'2px',
                        backgroundColor:'blue',
                        transition:'all 1000ms'
                    }}
                >
                </span>}
            </Axis>

            {fulcrumDistance < 100 &&
            <span
                style={{
                    position:'absolute',
                    right:'0px',
                    height:`${a_2}px`,
                    width:'2px',
                    backgroundColor:`${!darkmode ? 'orange ' : 'yellow'}`,
                    transition:'all 1000ms',
                    transform:`rotate(${nRotation}deg)`
                }}
            >
            </span>}
    
            <LeverBarText condition={validate(d_e) === 'invalid'}>
                <CustomMath>{`d_e = ${validate(d_e).toString()}`}</CustomMath>
                <CustomMath>{`d_r = ${validate(d_r).toString()}`}</CustomMath>
            </LeverBarText>

            <Fulcrum 
                rotation={rotation}
                style={fulcrumParameters} 
                condition={checkBoundary}
            >

                {!checkBoundary ? 
                <Triangle 
                    rotation={rotation} 
                    condition={checkBoundary}
                    darkmode={darkmode}
                />
                :
                <FulcrumText condition={checkBoundary} >
                    out of range or invalid parameter
                    <Button 
                        buttonType={'textage'}
                        onClick={() => setDisplayKeymap(true)}
                        text={'?'}
                        buttonClass={'help'}
                    />
                </FulcrumText>
                }

            </Fulcrum>

        </LeverBarContainer>
    )
}

export default LeverBar