import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"
import { ItemInfo,Blendering } from "./item.styles"

const BlenderLink = (props) => {

    const { 
        displayKeymap,
        setDisplayKeymap, 
        darkmode
    } = useContext(ViewContext)
    const { description,title } = props
    return (
        <Blendering
            darkmode={darkmode}
            displayKeymap={displayKeymap}
        >
            <a>{title}</a>
            <ItemInfo>{description}</ItemInfo>
        </Blendering>
    )
}

export default BlenderLink