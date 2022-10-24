import { AlertContainer } from "./alert.styles";
import { CloseHelp } from "../../KeyPad/keypad.styles";

const close = {
    position:'absolute',
    right:'10px',
    bottom:'10px'
}

const Alert = ({state,execute}) => {

    const { alert } = state

    return (
        <AlertContainer>
            <p>{alert}</p>

            <CloseHelp
                onClick={(e) => execute(e,'alert',null)}
                style={close}
            >
                close
            </CloseHelp>

        </AlertContainer>
        )
}

export default Alert