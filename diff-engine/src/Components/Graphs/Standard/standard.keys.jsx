import { KeyBox,BaseButton,LargeButton,CloseHelp } from "../KeyPad/keypad.styles";
import { backButton,ExecuteButton } from "../SVG";
import { Param,ParamInput } from "../KeyPad/keypad.styles";
import { useEffect } from "react";

const StandardKeys = (props) => {

    const {state,setState,execute,calculate} = props

    const { mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:``,
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
                style={{right:'10px',top:'85px'}}
            >
                {backButton()}
            </BaseButton>

            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'10px'}}
            >
                <strong>?</strong>
            </CloseHelp>

            <LargeButton
                style={{left:'10px'}}
                onClick={(e) => execution(e)}
            >
                {ExecuteButton()}
            </LargeButton>

            <LargeButton
                style={{left:'120px'}}
                onClick={(e) => setState({...state,mathFunc:'',calculation:'0'})}
            >
                <i style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>C</i>
            </LargeButton>

        </KeyBox>
    )
}

export default StandardKeys