import { backButton } from "../SVG";
import { useEffect } from "react";
import { 
    Param,
    ParamInput,
    BaseButton, 
    KeyBox
} from "../KeyPad/keypad.styles";

const UnitsKeys = (props) => {

    const {inputHandler,
        state,
        close,
        execute,
        setState,
    } = props

    const {mathFunc,units} = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`1`,
            displayInput:false,
            polars:false
        })
    },[])

    const input = (e) => {
        e.preventDefault()
        inputHandler(e)
    }



    return (
        <KeyBox>
            <Param>
                <i>{units}</i>
                <ParamInput
                    type="number"
                    onChange={(e) => input(e)}
                    value={mathFunc}
                    name="mathFunc"
                />
            </Param>

            <BaseButton
                style={{right:'80px'}}
                onClick={(e) => execute(e,'units','mm')}
            >
                <h1>mm</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'90px'}}
                onClick={(e) => execute(e,'units','in')}
            >
                <h1>in</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'180px'}}
                onClick={(e) => execute(e,'units','ft')}
            >
                <h1>ft</h1>
            </BaseButton>

            <BaseButton
                style={{right:'80px',top:'270px'}}
                onClick={(e) => execute(e,'units','cm')}
            >
                <h1>cm</h1>
            </BaseButton>

            <BaseButton
                style={{right:'0px'}}
                onClick={(e) => close(e)}
            >
                {backButton()}
            </BaseButton>

        </KeyBox>
    )
}

export default UnitsKeys