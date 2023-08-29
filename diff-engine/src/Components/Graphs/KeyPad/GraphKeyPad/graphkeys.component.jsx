import { GraphKeyPad } from "./graphkeys.styles"
import ToolPanel from "../GraphingToolPanel/graph-tools.component"
// import Button from "../Button"

export const GraphKeys = (props) => {

    const { copy } = props
    
    return (
        <GraphKeyPad>
            <ToolPanel copy={copy} />      
        </GraphKeyPad>
    )
}

