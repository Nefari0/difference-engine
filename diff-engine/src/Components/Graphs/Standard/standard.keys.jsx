import { KeyBox,BaseButton,LargeButton,CloseHelp } from "../KeyPad/keypad.styles";
import { backButton } from "../SVG";
import { Param,ParamInput } from "../KeyPad/keypad.styles";
import { useEffect } from "react";

const StandardKeys = (props) => {

    const {state,setState,execute,calculate} = props

    const { mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`0`,
            polars:false
        })
    },[])

    const execution = (e) => {
        calculate(e,mathFunc)
    }

    return (
        <KeyBox>

            <BaseButton
                onClick={(e) => execute(e,'currentView',null)}
                style={{right:'10px',bottom:'10px'}}
            >
                {backButton()}
            </BaseButton>

            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'10px',bottom:'100px'}}
            >
                <strong>?</strong>
            </CloseHelp>

            <LargeButton
                style={{left:'10px'}}
                onClick={(e) => execution(e)}
            >
                execute
            </LargeButton>
        </KeyBox>
    )
}

export default StandardKeys