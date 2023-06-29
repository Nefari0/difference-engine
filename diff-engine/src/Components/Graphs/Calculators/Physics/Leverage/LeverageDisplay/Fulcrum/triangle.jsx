import { useContext } from "react"
import { ViewContext } from "../../../../../../Context/view.context"
import { Wedge } from "./triangle.styles"

const Triangle = ({condition}) => {
    const { darkmode } = useContext(ViewContext)
    return (
        <Wedge condition={condition} darkmode={darkmode}></Wedge>
    )
}

export default Triangle