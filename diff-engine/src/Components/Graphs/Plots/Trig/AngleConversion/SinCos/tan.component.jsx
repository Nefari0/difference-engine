// import { ArcCircle,LargeSpot } from "./arc.styles"
import { TanLine } from "../display.styles"
import { ThetaOrigin } from "../display.styles"

const Tan = (props) => {

    const { theta } = props

    const tanParams = {
        transform:`rotate(90deg)`,
        left:'100px',
        // left:`${201*Math.cos(theta)}px`,
        // bottom:`${198*Math.sin(theta)}px`,
        zIndex:'100000'
    }

    return (

            // <ThetaOrigin style={{left:'0px',bottom:'0px',backgroundColor:''}}>
                <TanLine style={tanParams}></TanLine>
            // </ThetaOrigin>

    )
}

export default Tan