import styled from "styled-components"
import { TheCircle, Theta, ThetaOrigin, ValueDisplay} from "./display.styles"
import { MathComponent } from "mathjax-react"
import Cos from "./SicCos/cos.component"
import Sin from "./SicCos/sin.component"


const UnitCircleDisplay = ({state}) => {

    const { degrees,showDegrees,radians } = state

    const returnDegrees = () => { // Display angle line in degrees or radians
        return (showDegrees ? degrees : radians * (180/Math.PI))
    }

    const SinCosParts = () => { // Draw line from origin
        console.log(Math.sin(degrees))
        return (showDegrees ? degrees : radians)
    }

    const radianVal = () => { // Display radian value
        return (showDegrees ? (degrees*(Math.PI/180)).toFixed(2) : parseFloat(radians).toFixed(2))
    }

    const degreeVal = () => { // Display degree value
        return (showDegrees ? parseFloat(degrees).toFixed(2) : (radians * (180/Math.PI)).toFixed(2))
    }

    const deg = {
        left:'140px',
        top:'-20px',
        transform: `rotate(${returnDegrees()}deg)`,
    }

    const rad = {
        left:'10px',
        top:'-20px',
        transform: `rotate(${returnDegrees()}deg)`,
    }


    return (
        <ThetaOrigin>
            <TheCircle theta={returnDegrees()}>

                <Theta>

                    <ValueDisplay style={deg}>
                        <MathComponent tex={String.raw`${degreeVal()}`} />
                        <i>deg</i>
                    </ValueDisplay>

                    <ValueDisplay style={rad}>
                        <MathComponent tex={String.raw`${radianVal()}`} />
                        <i>rad</i>
                    </ValueDisplay>

                </Theta>

            </TheCircle>

            {/* <Sin radians={SinCosParts()}/> */}
            <Sin radians={radianVal()}/>

            <Cos radians={radianVal()} />

        </ThetaOrigin>
    )
}

export default UnitCircleDisplay

const DivTest = styled.span`
    position:absolute;
    width:200px;
    height:4px;
    background-color:purple;
`