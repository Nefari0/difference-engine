import { useContext } from "react"
import { CosPart,ThetaOrigin,CosPointer,PointerOrigin } from "../display.styles"

import { ViewContext } from "../../../../../Context/view.context"

const Cos = ({radians}) => {

    const { darkmode } = useContext(ViewContext)

    const rotation = {
        top:'-50px',
        left:'-5px',
        transform: `rotate(180deg)`,
        zIndex:'0'
    }

    const condition1 = Math.cos(parseFloat(radians)) < 0
    const condition2 = Math.sin(parseFloat(radians)) < 0

    const flipPointer = () => {
        if (condition1 && condition2) {
            return {
                transform:`rotate(180deg)`,
            }
        } else if (!condition1 && !condition2) {
            return {
                transform:`rotate(180deg)`,
            }
        }
    }

    return(
        <ThetaOrigin style={Math.cos(parseFloat(radians)) < 0 ? rotation : null}>
            <CosPart radians={radians}>
                <PointerOrigin style={flipPointer()}>
                    <CosPointer radians={radians} darkmode={darkmode}/>
                </PointerOrigin>
            </CosPart>
        </ThetaOrigin>
    )
}

export default Cos