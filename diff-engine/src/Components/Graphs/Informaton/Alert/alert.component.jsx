import { useContext } from "react";
import { AlertContainer } from "./alert.styles";
import { BaseButton } from "../../KeyPad/input.styles";

import { ViewContext } from "../../../Context/view.context";

const close = {
    position:'absolute',
    right:'10px',
    bottom:'10px'
}

const Alert = ({state,execute}) => {

    const { alert } = state

    const { darkmode } = useContext(ViewContext)

    return (
        <AlertContainer darkmode={darkmode}>
            <p>{alert}</p>

            <BaseButton
                onClick={(e) => execute(e,'alert',null)}
                style={close}
            >
                close
            </BaseButton>

        </AlertContainer>
        )
}

export default Alert