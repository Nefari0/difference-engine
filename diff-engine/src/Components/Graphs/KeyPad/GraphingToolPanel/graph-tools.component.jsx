import { Toolbar } from "./graph-tools.styles";
import { CopyIcon } from "../../SVG";
import Button from "../Button";

const ToolPanel = () => {

    return (
        <Toolbar>
            <Button
                text={CopyIcon({width:'40px'})}
                buttonClass={'translucent'}
                p={'text'}
            />
            {/* <Button /> */}
        </Toolbar>
    )
}

export default ToolPanel