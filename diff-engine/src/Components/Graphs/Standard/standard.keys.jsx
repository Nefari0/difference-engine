import { KeyBox,BaseButton,LargeButton,CloseHelp,EqualButton,AllClearButton } from "../KeyPad/keypad.styles";
import Button from "../KeyPad/Button";
import { backButton,ExecuteButton,Book } from "../SVG";
import { useEffect,useContext } from "react";
import { NumberPad } from "../KeyPad/NumberPad/nums.component";
import { Operators } from "../KeyPad/NumberPad/operators.components";
import { ViewContext } from "../../Context/view.context";

const numpad = {
    left:'100px'
}

const StandardKeys = (props) => {

    const {
        state,
        setState,
        execute,
        calculate,
        close
    } = props

    const { mathFunc } = state

    const {
        setInformation,
        darkmode
    } = useContext(ViewContext)

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

    const addCharacter = (val) => {setState({...state,mathFunc:mathFunc+val})}

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
                style={{opacity:'1',right:'0px',top:'80px'}}
                darkmode={darkmode}
            >
                {backButton()}
            </BaseButton>

            <BaseButton
                onClick={(e) => setInformation('arith')}
                style={{right:'0px'}}
                darkmode={darkmode}
            >
                {Book()}
            </BaseButton>

            <Button
                onClick={() => addCharacter(')')}
                text={')'}
                styles={{fontSize:'32px',right:'0px',top:'240px'}}
            />
            <Button
                onClick={() => addCharacter('(')}
                text={'('}
                styles={{fontSize:'32px',right:'0px',top:'160px'}}
            />

            <EqualButton
                style={{left:'-5px'}}
                onClick={(e) => execution(e)}
            >
                <strong>=</strong>
            </EqualButton>

            {/* --- CLEAR BUTTON --- */}
            <AllClearButton
                style={{left:'-5px',top:'80px'}}
                onClick={(e) => setState({...state,mathFunc:'',calculation:'0'})}
            >
                <strong style={{fontSize:'40px',fontWeight:'200',opacity:'.8'}}>AC</strong>
            </AllClearButton>

        </KeyBox>
    )
}

export default StandardKeys