import { useContext,useEffect } from "react"
import { ViewContext } from "../../../../Context/view.context"
import { OuterRotation, Theta, ThetaOrigin } from "./display.styles"
import { TrigFunctions } from "./TrigFunctions/functions.component"
import RationalRads from "./RadianDisplay/rads.component"
import Cos from "./SinCos/cos.component"
import Sin from "./SinCos/sin.component"
import Tan from "./SinCos/tan.component"

const UnitCircleDisplay = (props) => {

    const { state } = props
    const { degrees,showDegrees,radians } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)

    useEffect(() => {setScrollBar(false)},[])

    const returnDegrees = () => { // Display angle line in degrees or radians
        return (showDegrees ? degrees : radians * (180/Math.PI))
    }

    const radianVal = () => { // Display radian value
        const returnValue = (showDegrees ? (degrees*(Math.PI/180)).toFixed(2) : parseFloat(radians).toFixed(2))
        return (returnValue === "NaN" ? "0" : returnValue)
    }

    const degreeVal = () => { // Display degree value
        const returnValue = (showDegrees ? parseFloat(degrees).toFixed(2) : (radians * (180/Math.PI)).toFixed(2))
        return (returnValue === "NaN" ? "0" : returnValue)
    }

    // const deg = {
    //     left:'120px',
    //     top:'-20px',
    //     transform: `rotate(${returnDegrees()}deg)`,
    // }

    // const rad = {
    //     left:'40px',
    //     top:'-20px',
    //     transform: `rotate(${returnDegrees()}deg)`,
    // }

    const tOrigin = {
        top:'16px',
        left:'0px'
    }

    const rads_degs = {
        transform: `rotate(${returnDegrees()}deg)`,
        transition: 'all 1000ms',
        left:'40px',
        bottom:'150px'
    }

    return (
        <ThetaOrigin
            style={tOrigin}
        >
            <TrigFunctions
                darkmode={darkmode}
                showDegrees={showDegrees}
                radians={radians}
                degrees={degrees}
            />

            <OuterRotation
                theta={returnDegrees()}
            >
            <RationalRads
                style={rads_degs}
                degreeVal={degreeVal}
                radianVal={radianVal}
                radians={radians}
                degrees={degrees}
                showDegrees={showDegrees}
            />

                <Theta
                    darkmode={darkmode}
                    style={{left:'200px',top:'196px'}}
                >
                    <Tan/>
                </Theta>

            </OuterRotation>
            
            <Sin radians={radianVal()} style={{zIndex:'1000000'}}/>

            <Cos radians={radianVal()} />

        </ThetaOrigin>
    )
}

export default UnitCircleDisplay