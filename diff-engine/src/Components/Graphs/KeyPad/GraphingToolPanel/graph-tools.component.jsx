import { Toolbar } from "./graph-tools.styles";
import { CopyIcon,MathVariable } from "../../SVG";
import Button from "../Button";

const iconStyles = {
    width:'40px'
}

const ToolPanel = (props) => {

    const { copy } = props

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
            />
        </Toolbar>
    )
}

export default ToolPanel