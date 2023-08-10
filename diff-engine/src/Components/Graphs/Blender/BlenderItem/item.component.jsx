import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"
import { Blendering } from "./item.styles"

const BlenderLink = (props) => {

    const { 
        displayKeymap,
        darkmode
    } = useContext(ViewContext)

    const { description,title,...otherProps  } = props
    
    return (
        <Blendering
            darkmode={darkmode}
            displayKeymap={displayKeymap}
            {...otherProps}
        >
            <a>{title}</a>
            <p>{description}</p>
        </Blendering>
    )
}

export default BlenderLink