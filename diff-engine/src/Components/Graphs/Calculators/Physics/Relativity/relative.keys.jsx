import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { backButton } from "../../../SVG";

const RelativityKeyPad = () => {

    const {
        currentView,setCurrentView
    } = useContext(ViewContext)

    return (
        <KeyBox>
            <Button
                text={backButton()}
                styles={{right:'0px'}}
                onClick={() => setCurrentView('physics')}
            />
        </KeyBox>
    )
}

export default RelativityKeyPad