import { useContext } from "react"
import { ViewContext } from "../../../../../../Context/view.context"
import { Wedge } from "./height-arrow.styles"
import { WedgeWrapper } from "./height-arrow.styles"

const HeightArrow = () => {
    const { darkmode } = useContext(ViewContext)
    return (
        <WedgeWrapper darkmode={darkmode}>
            <Wedge ></Wedge>
        </WedgeWrapper>
    )
}

export default HeightArrow