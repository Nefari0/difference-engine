import { useContext } from "react"
import { ViewContext } from "../../../../../../Context/view.context"
import { Wedge } from "./triangle.styles"
import CustomMath from "../../../../../KeyPad/CostomMath"

const Triangle = ({condition,rotation}) => {
    const { darkmode } = useContext(ViewContext)
    return (
        <Wedge condition={condition} darkmode={darkmode}>
            <div style={{fontSize:'16px',transform:`rotate(${rotation}deg)`,top:'30px',right:'-13px',position:'absolute'}}>
                <CustomMath >{`${rotation.toString().split('').slice(1).join('')}^\\circ`}</CustomMath>
            </div>
        </Wedge>
    )
}

export default Triangle