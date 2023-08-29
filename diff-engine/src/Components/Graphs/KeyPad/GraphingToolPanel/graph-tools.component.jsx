import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
import { Toolbar } from "./graph-tools.styles";
import { CopyIcon,MathVariable } from "../../SVG";
import Button from "../Button";

const iconStyles = {
    width:'40px'
}

const ToolPanel = (props) => {

    const { copy } = props

    const { showPlotValues,setShowPlotValues, } = useContext(ViewContext)

    return (
        <Toolbar>
            <Button
                text={CopyIcon(iconStyles)}
                buttonClass={'translucent'}
                p={'Copy coordinates'}
                onClick={() => copy()}
                styles={{zIndex:'1'}}
            />
            <Button
                text={MathVariable(iconStyles)}
                buttonClass={'translucent'}
                p={'Show values'}
                styles={{zIndex:'0'}}
                onClick={() => setShowPlotValues(!showPlotValues)}
            />
        </Toolbar>
    )
}

export default ToolPanel