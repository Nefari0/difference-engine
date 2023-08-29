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
                p={'text'}
                onClick={() => copy()}
            />
            <Button
                text={MathVariable(iconStyles)}
                buttonClass={'translucent'}
                p={'show values'}
                onClick={() => setShowPlotValues(!showPlotValues)}
            />
        </Toolbar>
    )
}

export default ToolPanel