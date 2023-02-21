import { KeymapContainer } from "./keymap.styles";
import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";

const DisplayKeyInfo = ({execute}) => {

    const {
        displayKeymap
    } = useContext(ViewContext)

    return (
        <KeymapContainer displayKeymap={displayKeymap}/>
        )
    }

export default DisplayKeyInfo