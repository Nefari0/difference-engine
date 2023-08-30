import { GraphKeyPad } from "./graphkeys.styles"
import ToolPanel from "../GraphingToolPanel/graph-tools.component"

export const GraphKeys = (props) => {

    const { copy,state } = props

    return (
        <GraphKeyPad>
            <ToolPanel state={state} copy={copy} />      
        </GraphKeyPad>
    )
}

