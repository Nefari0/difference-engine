import { KeymapContainer } from "./keymap.styles";
import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";

const DisplayKeyInfo = ({execute}) => {

    const {
        setDisplayKeymap,
        displayKeymap
    } = useContext(ViewContext)

    return (
        <KeymapContainer
            onClick={() => setDisplayKeymap(false)}
            displayKeymap={displayKeymap}
        />
    )
}

export default DisplayKeyInfo