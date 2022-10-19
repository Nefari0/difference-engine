import styled from "styled-components"
// import { useEffect } from "react"
import { TheCircle, Theta, ThetaOrigin, ValueDisplay } from "./display.styles"
import { MathComponent } from "mathjax-react"
import Cos from "./SinCos/cos.component"
import Sin from "./SinCos/sin.component"
import Tan from "./SinCos/tan.component"

const max = 250
// const min = -250

// var xVector = []
// for (let i = min; i < max; i++) {xVector.push(i)}


const UnitCircleDisplay = (props) => {

    const { state,vectorMap } = props
    const { degrees,showDegrees,radians,polarVector,arc } = state

    const returnDegrees = () => { // Display angle line in degrees or radians
        return (showDegrees ? degrees : radians * (180/Math.PI))
    }

    const radianVal = () => { // Display radian value
        return (showDegrees ? (degrees*(Math.PI/180)).toFixed(2) : parseFloat(radians).toFixed(2))
    }

    const degreeVal = () => { // Display degree value
        return (showDegrees ? parseFloat(degrees).toFixed(2) : (radians * (180/Math.PI)).toFixed(2))
    }

    const deg = {
        left:'120px',
        top:'-20px',
        transform: `rotate(${returnDegrees()}deg)`,
    }

    const rad = {
        left:'40px',
        top:'-20px',
        transform: `rotate(${returnDegrees()}deg)`,
    }

    return (
        <ThetaOrigin>

            <TheCircle theta={returnDegrees()}>
                <Theta style={{left:'200px',top:'195px'}}>

                    <ValueDisplay style={deg}>
                        <MathComponent tex={String.raw`${degreeVal()}`} />
                        <i>deg</i>
                    </ValueDisplay>

                    <ValueDisplay style={rad}>
                        <MathComponent tex={String.raw`${radianVal()}`} />
                        <i>rad</i>
                    </ValueDisplay>

                    <Tan
                        vectorMap={vectorMap}
                        theta={radians}
                    />
                </Theta>

            </TheCircle>
            
            <Sin radians={radianVal()}/>

            <Cos radians={radianVal()} />

        </ThetaOrigin>
    )
}

export default UnitCircleDisplay