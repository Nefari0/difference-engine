import { KeymapContainer } from "./keymap.styles";

const DisplayKeyInfo = ({execute}) => {

    return (
        <KeymapContainer onClick={(e) => execute(e,'displayKeymap',false)}/>
    )
}

export default DisplayKeyInfo