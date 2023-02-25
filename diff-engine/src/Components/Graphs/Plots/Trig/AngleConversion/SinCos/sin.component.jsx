import { useContext } from "react"
import { ThetaOrigin,SinPart,SinPointer } from "../display.styles"

import { ViewContext } from "../../../../../Context/view.context"

const Sin = ({radians}) => {

    const { darkmode } = useContext(ViewContext)
 
    const rotation = {
        top:'-50px',
        left:'-5px',
        transform: `rotate(180deg)`,
        zIndex:'0',
    }

    const condition1 = Math.cos(parseFloat(radians)) < 0
    const condition2 = Math.sin(parseFloat(radians)) < 0

    const flipPointer = () => {
        if (condition1 && condition2) {
            return {
                top:'0px',
                transform:`rotate(180deg)`
            }
        } else if (!condition1 && !condition2) {
            return {
                top:'0px',
                transform:`rotate(180deg)`
            }
        } else {
            return {
                right:'0px'
            }
        }
    }

    return(
        <ThetaOrigin style={Math.sin(parseFloat(radians)) < 0 ? rotation : null}>
            <SinPart radians={parseFloat(radians)}>
                <ThetaOrigin style={flipPointer()}>
                    <SinPointer radians={radians} darkmode={darkmode}/>
                </ThetaOrigin>
            </SinPart>
        </ThetaOrigin>
    )
}

export default Sin