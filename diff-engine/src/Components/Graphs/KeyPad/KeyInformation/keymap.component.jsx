import { KeymapContainer } from "./keymap.styles";
import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";

const DisplayKeyInfo = ({execute}) => {

    const {
        displayKeymap,
        setDisplayKeymap
    } = useContext(ViewContext)

    return (
        <KeymapContainer onClick={() => setDisplayKeymap(false)}/>
    )
}

export default DisplayKeyInfo