import styled from "styled-components"
import { TheCircle, Theta, ThetaOrigin, ValueDisplay} from "./display.styles"
import { MathComponent } from "mathjax-react"
import { useState } from "react"
import Cos from "./SicCos/cos.component"
import Sin from "./SicCos/sin.component"


const UnitCircleDisplay = ({state}) => {

    const { degrees,showDegrees } = state

    const deg = {
        left:'140px',
        top:'-20px',
        transform: `rotate(${degrees}deg)`,
    }

    const rad = {
        left:'10px',
        top:'-20px',
        transform: `rotate(${degrees}deg)`,
    }

    // const returnDegrees = () => {
    //     return (!showDegrees ? (degrees*(Math.PI/180)).toFixed(2) : degrees * 180/Math.PI)
    // }

    const radians = (degrees*(Math.PI/180)).toFixed(2)

    return (
        <ThetaOrigin>
            <TheCircle theta={degrees}>

                <Theta>

                    <ValueDisplay style={deg}>
                        <MathComponent tex={String.raw`${degrees}`} />
                        <i>deg</i>
                    </ValueDisplay>

                    <ValueDisplay style={rad}>
                        <MathComponent tex={String.raw`${radians}`} />
                        <i>rad</i>
                    </ValueDisplay>

                </Theta>

            </TheCircle>

            <Sin radians={radians}/>

            <Cos radians={radians} />

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