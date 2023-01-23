import { KeyBox,BaseButton,LargeButton,CloseHelp } from "../KeyPad/keypad.styles";
import { backButton,ExecuteButton,Book } from "../SVG";
import { useEffect,useContext } from "react";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";
import { Operators } from "../KeyPad/NumberPad/operators.components";
import { ViewContext } from "../../Context/view.context";

const numpad = {
    left:'100px'
}

const StandardKeys = (props) => {

    const {state,
        setState,
        execute,
        calculate,
        close
    } = props

    const { mathFunc } = state

    const {setCurrentView} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:``,
            polars:false,
        })
    },[])

    const execution = (e) => {
        calculate(e,mathFunc)
    }

    return (
        <KeyBox>

            <NumberPad
                styles={numpad}
                state={state}
                setState={setState}
            />

            <Operators
                state={state}
                setState={setState}
            />

            <BaseButton
                onClick={(e) => close(e)}
                style={{right:'0px',top:'85px'}}
            >
                {backButton()}
            </BaseButton>

            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'0px'}}
            >
                {Book()}
            </CloseHelp>

            <BaseButton
                style={{left:'0px'}}
                onClick={(e) => execution(e)}
            >
                {ExecuteButton()}
            </BaseButton>

            {/* --- CLEAR BUTTON --- */}
            <BaseButton
                style={{left:'0px',top:'85px'}}
                onClick={(e) => setState({...state,mathFunc:'',calculation:'0'})}
            >
                <i style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>C</i>
            </BaseButton>

        </KeyBox>
    )
}

export default StandardKeys